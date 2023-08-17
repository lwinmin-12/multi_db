// import mongoose from "mongoose";
// import { Schema } from "mongoose";
// import { kyaw_san } from "../app";

// export interface testDocument extends mongoose.Document {
//   name: string;
// }

// const testSchema = new Schema({
//   name: { type: String, required: true, unique: true },
// });

// const testModel = kyaw_san.model<testDocument>("test", testSchema);
// export default testModel;

// test.model.js

import mongoose from "mongoose";
import connectDBs from "../utils/connect";

const { kyaw_san, chaw_su } = connectDBs();

export interface testDocument extends mongoose.Document {
  name: string;
}

const testSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

// Use the kyaw_san connection to define the model
export const TestKyawSan = kyaw_san.model<testDocument>("Test", testSchema);

// Use the chaw_su connection to define another model
export const TestChawSu = chaw_su.model<testDocument>("Test", testSchema);

// export default { TestKyawSan, TestChawSu };
