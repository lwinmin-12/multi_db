import {
  addChawsuHandler,
  deletChawsuHandler,
  getChawsuHandler,
} from "../controller/chawsu.controller";

const chawsuRoute = require("express").Router();

chawsuRoute.get("/", getChawsuHandler);
chawsuRoute.post("/", addChawsuHandler);
chawsuRoute.delete("/", deletChawsuHandler);

export default chawsuRoute;
