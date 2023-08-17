import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import { addChawsu, deleteChawsu, getChawsu } from "../service/chawsu.service";

export const getChawsuHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getChawsu(req.query);
    fMsg(res, "Chawsu are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addChawsuHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addChawsu(req.body);
    fMsg(res, "New Chawsu was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deletChawsuHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteChawsu(req.query);
    fMsg(res, "Chawsu was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
