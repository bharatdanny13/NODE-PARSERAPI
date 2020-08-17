import express from "express";
import userRoutes from "../routes/user";

export default class Main {
  public intialize(): void {
    const PORT = process.env.PORT || 5000;
    const app = express();

    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });

    // Body Parser Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //Routes which should handle requests
    app.use("/", userRoutes);
  }
}
