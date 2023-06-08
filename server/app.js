//npm packages
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import cors from "cors";

//Custom Modules, Packages, Configs, Etc
import connectionDatabase from "./helpers/connectionDatabase/connectionDatabase.js";
import { initRoutes } from "./routes/index.routes.js";
import initLimit from "./helpers/limiter/rateLimiter.js";
import corsOption from "./helpers/cors/corsOptions.js";
import { errorHandler } from "./middleware/errorHandler/errorHandler.js";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({
  path: envFile,
});

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());
app.use(compression());
app.use(cors(corsOption));
app.use(errorHandler);

app.get("/check", (req, res) => {
  res.json("Check is running");
});

initRoutes(app);
initLimit(app);
await connectionDatabase();

export const PORT = process.env.PORT || 5000;
export default app;
