import { notion } from "./service/notion";
import { todoist } from "./service/todoist";

const main = async () => {
  await notion();
  await todoist();

}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
