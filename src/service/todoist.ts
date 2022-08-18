// @ts-nocheck

import { TodoistApi } from "@doist/todoist-api-typescript";
import { notion } from "./notion";
import dotenv from "dotenv";

dotenv.config();

export const todoist = async () => {
  const todoist = new TodoistApi(process.env.TODOIST_TOKEN as string);

  const payload = await notion();
  
  const todoistPriorityList = {
    high: 4,
    med: 3,
    low: 2,
    none: 1,
  }


  payload.map(async task => {
    await todoist.addTask({
      content: task.title,
      description: task.description,
      dueString: "in 3 days",
      dueLang: "en",
      priority: todoistPriorityList.low,
    })
  });
};
