import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";

import config from "config";
import cors from "cors";
import connectDBs from "./utils/connect";
import testRoute from "./router/test.routes";
import chawsuRoute from "./router/chawsu.routes";

const app = express();
const server = require("http").createServer(app);

app.use(fileUpload());
app.use(cors({ origin: "*" }));

// export const { kyaw_san, chaw_su } = connectDBs();

// kyaw_san.once("open", () => {
//   console.log("Kyaw San database connection established");
// });

// chaw_su.once("open", () => {
//   console.log("Chaw Su database connection established");
// });

const port = config.get<number>("port");
const host = config.get<string>("host");

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("ok");
});

app.use("/test", testRoute);
// app.use('/chawsu' , chawsuRoute)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 409;
  res.status(err.status).json({
    con: false,
    msg: err.message,
  });
});

server.listen(port, () =>
  console.log(`server is running in  http://${host}:${port}`)
);
