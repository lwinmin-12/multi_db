import { FilterQuery } from "mongoose";
import chawsuModel, { chawsuDocument } from "../model/chawsu.model";

export const getChawsu = async (query: FilterQuery<chawsuDocument>) => {
  try {
    return chawsuModel.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const addChawsu = async (body: chawsuDocument) => {
  try {
    return new chawsuModel(body).save();
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteChawsu = async (query: FilterQuery<chawsuDocument>) => {
  try {
    return chawsuModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};
