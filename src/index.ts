import { notion } from "./service/notion";
import { todoist } from "./service/todoist";

const main = async () => {
  const currentTasks = await notion();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
