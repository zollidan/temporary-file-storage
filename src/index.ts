import { createServer } from "http";
import { config } from "./config";
import { setupApp } from "./app";

const app = await setupApp();
const server = createServer(app);

server.listen(config.Port, () => {
  console.log(
    `🚀 Server running at http://${config.Hostname}:${config.Port}/graphql 🌐`
  );
});
