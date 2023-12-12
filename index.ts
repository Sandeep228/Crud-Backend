import express, { Application, Request, Response } from "express";
import cors from "cors";
import "./db/connection";

import Routes from "./router/router";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());
app.use(cors());
app.use("/", Routes);

app.get("/get", (req: Request, resp: Response) => {
  resp.json("working fine");
});

app.listen(PORT, () => {
  console.log(`server is live + ${PORT}`);
});
