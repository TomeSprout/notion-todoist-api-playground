# Notion x Todoist API Playground

Uses the [Notion SDK](https://github.com/makenotion/notion-sdk-js) Template Repository
and [TypeScript](https://www.typescriptlang.org/).

## Features

- TypeScript for type checking.
- [Prettier](https://prettier.io/) for code formatting.
- A minimal GitHub Actions workflow that typechecks your code.
- [Dotenv](https://www.npmjs.com/package/dotenv) for configuring your Notion API token.
- [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)
  for ensuring your (and this template's!) dependencies are up to date.
- Our lovely Notion SDK!

## Getting Started

1. See the documentation for [creating a Notion integration](https://developers.notion.com/docs/getting-started) and have a secret Notion token.
2. Share the newly created integration with the Notion Page or Database to be accessed and record the Database ID.
3. See the documentation for [the official Todoist REST API](https://developer.todoist.com/rest/v1/). The application needs an [authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) with the appropriate `Bearer $token` to make authorized calls.\
During development, the personal API token can be used and is accessed via User Settings > [Integrations](https://todoist.com/prefs/integrations) > API token.
4. Add Notion token, Todoist token, and Notion Database ID to an `.env` file at the root of this repository.\
For example: `echo "NOTION_TOKEN=[your token here]" > .env`.
5. Run `npm install`.
6. Edit the `database_id` in `index.ts` from FIXME to the Database ID shared with the integration.
7. Run `npm start` to run the script.

Now you can head over to our [developer documentation](https://developers.notion.com/) for more information on using the Notion API!

## NPM Scripts

This template has a few built-in NPM scripts:

| Script              | Action                                                                                                                                                                          |
| - | - |
| `npm start`         | Run `index.ts`.                                                                                                                                                                 |
| `npm run typecheck` | Type check using the TypeScript compiler.                                                                                                                                       |
| `npm run format`    | Format using Prettier (also recommended: the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) if you're using VS code.) |
| `npm run build`     | Build JavaScript into the `dist/` directory. You normally shouldn't need this if you're using `npm start`.                                                                      |
