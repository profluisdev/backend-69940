import dotenv from "dotenv";
import { program } from "./commander.js";

const setPath = (mode) => {
  switch (mode) {
    case "production":
      return ".env.production";
    case "development":
      return ".env.development";
    case "qa":
      return ".env.qa";
    default:
      return ".env";
  }
};

dotenv.config({ path: setPath(program.opts().m) });

export default {
  PORT: process.env.PORT,
};
