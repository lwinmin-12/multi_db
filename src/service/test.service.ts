import { FilterQuery } from "mongoose";
import { TestChawSu, TestKyawSan, testDocument } from "../model/test.model";

export const getTest = async (query: FilterQuery<testDocument>) => {
  try {
    return TestKyawSan.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const addTest = async (body: testDocument) => {
  try {
    let result1 = await new TestKyawSan(body).save();
    let result2 = await new TestChawSu(body).save();

    return [result1, result2];
  } catch (e) {
    throw new Error(e);
  }
};

// export const deleteTest = async (query: FilterQuery<testDocument>) => {
//   try {
//     return testModel.deleteMany(query);
//   } catch (e) {
//     throw new Error(e);
//   }
// };
