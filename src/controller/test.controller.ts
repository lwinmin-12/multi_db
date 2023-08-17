import { Request, Response, NextFunction } from "express";
import { addTest, deleteTest, getTest } from "../service/test.service";
import fMsg from "../utils/helper";

export const getTestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getTest(req.query);
    fMsg(res, "Test are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addTestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addTest(req.body);
    fMsg(res, "New Test was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deletTestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteTest(req.query);
    fMsg(res, "Test was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
