import { Client } from "@notionhq/client";
import { TodoistApi } from "@doist/todoist-api-typescript";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const databaseID: string = process.env.NOTION_DATABASE_ID as string;
  const todoist = new TodoistApi(process.env.TODOIST_TOKEN as string);

  const { results } = await notion.databases.query({
    database_id: databaseID,
  });
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
