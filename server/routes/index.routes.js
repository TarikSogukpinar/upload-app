import express from "express";
import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./user/user.routes.js";
import uploadRoutes from "./upload/upload.routes.js";

const app = express();

export function initRoutes(app) {
  app.use("/api/auth", authRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/upload", uploadRoutes);

  app.all("*", (req, res) => {
    res.status(404).json({
      error: true,
      message: "Route not found",
    });
  });
}
