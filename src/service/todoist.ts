import { TodoistApi } from "@doist/todoist-api-typescript";
import dotenv from "dotenv";
dotenv.config();

export const todoist = async () => {
  const todoist = new TodoistApi(process.env.TODOIST_TOKEN as string);

  await todoist.getProjects()
    .then((projects) => projects.map((project: any) => console.log(project.name)))
    .catch((error) => console.error());
  
  await todoist.getTasks()
    .then((tasks) => console.log(tasks))
    .catch((error) => console.error());
}