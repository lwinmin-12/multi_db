import {
  addTestHandler,
  deletTestHandler,
  getTestHandler,
} from "../controller/test.controller";

const testRoute = require("express").Router();

testRoute.get("/", getTestHandler);
testRoute.post("/", addTestHandler);
testRoute.delete("/", deletTestHandler);

export default testRoute;
