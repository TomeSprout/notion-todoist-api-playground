// @ts-nocheck

import { TodoistApi } from "@doist/todoist-api-typescript";
import { notion } from "./notion";
import dotenv from "dotenv";

dotenv.config();

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
};
