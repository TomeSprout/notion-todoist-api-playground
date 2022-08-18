// @ts-nocheck

import { TodoistApi } from "@doist/todoist-api-typescript";
import { notion } from "./notion";
import dotenv from "dotenv";

dotenv.config();

interface TodoistProject {
  url: string;
  id: number;
  name: string;
  color: number;
  favorite: boolean;
  commentCount: number;
  shared: boolean;
  parentId?: number | undefined;
  order?: number | undefined;
  inboxProject?: boolean | undefined;
  teamInbox?: boolean | undefined;
  syncId?: number | undefined;
}

export const todoist = async () => {
  const todoist = new TodoistApi(process.env.TODOIST_TOKEN as string);

  const payload = await notion();
  const NotionTodoistTasks = [];
  const parentTaskID: number = 6097394348;
  const todoistPriority = { high: 4, med: 3, low: 2, none: 1 };
  let inboxProjectID: number = 0;
  let labelNotionID: number = 0;

  await todoist.getLabels().then((labels) => {
    labels.map(async (label) => {
      label.name === "Notion"
        ? (labelNotionID = label.id)
        : (labelNotionID = 0);
    });
  });

  if (labelNotionID === 0) {
    await todoist.addLabel({ name: "Notion", color: 49 }).then((label) => {
      labelNotionID = label.id;
    });
  }

  payload.map(async (task) => {
    await todoist.addTask({
      content: task.title,
      description: task.description,
      dueString: "in 3 days",
      dueLang: "en",
      priority: todoistPriority.none,
      parentId: parentTaskID,
      labelIds: [labelNotionID],
    });
  });

  await todoist.getProjects().then((projects) =>
    projects.map((project: TodoistProject) => {
      project.name === "Inbox" && (inboxProjectID = project.id);
    })
  );

  await todoist.getTasks(parentTaskID).then((tasks) => {
    tasks.map(
      (task) =>
        task.parentId === parentTaskID && NotionTodoistTasks.push(task.id)
    );
  });
};
