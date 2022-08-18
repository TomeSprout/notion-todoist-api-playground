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
  const parentTaskID: number = 6096455839;
  const todoistPriorityList = {
    high: 4,
    med: 3,
    low: 2,
    none: 1,
  }
  let inboxProjectID: number = 0;
  let labelNotionID: number = 0;

  await todoist.addLabel({ name: 'Notion', color: 49 })
    .then((label) => labelNotionID = label.id)
    .catch((error) => console.log(error));

  payload.map(async task => {
    await todoist.addTask({
      content: task.title,
      description: task.description,
      dueString: "in 3 days",
      dueLang: "en",
      priority: todoistPriorityList.low,
      parentId: parentTaskID,
      labelIds: [labelNotionID],
    })
  });

  await todoist
    .getProjects()
    .then((projects) =>
      projects.map(async (project: TodoistProject) => {
        project.name === 'Inbox' && (inboxProjectID = project.id);        
      })
    )
    .catch((error) => console.error());

  await todoist
    .getTasks(labelNotionID)
    .then((tasks) => {
      console.log(tasks.content);
    })
  .catch(error => console.error());
};
