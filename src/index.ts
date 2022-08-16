import { notion } from "./service/notion";
import { todoist } from "./service/todoist";

interface NotionTasksPayload {
  [index: number]: {
    object: string;
    id: string;
    "created_time": string;
    "last_edited_time": string;
    "created_by": { object: string; id: string; };
    "last_edited_by": { object: string; id: string; };
    cover: { type: string; external: { url: string; } } | null;
    icon: { type: string; external: { url: string; } } | null;
    parent: { type: string; database_id: string; };
    archived: boolean;
    properties: { Desc: { id: string; }; Date: { id: string; }; Task: { id: string; } };
    url: string;
  }
}

const main = async () => {
  const currentTasks = await notion();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
