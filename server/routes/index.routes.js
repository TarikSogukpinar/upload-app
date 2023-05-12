import express from "express";
import authRoutes from "./auth/auth.routes.js";

const app = express();

export function initRoutes(app) {
  app.use("/api/auth", authRoutes);

  app.all("*", (req, res) => {
    res.status(404).json({
      error: true,
      message: "Route not found",
    });
  });
}
