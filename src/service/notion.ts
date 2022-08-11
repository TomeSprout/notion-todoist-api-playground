import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const databaseID: string = process.env.NOTION_DATABASE_ID as string;

export const notion = async () => {
  const notionAPI = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const { results } = await notionAPI.databases.query({
    database_id: databaseID,
  });
}
