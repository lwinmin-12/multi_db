import mongoose from "mongoose";
import { Schema } from "mongoose";

import connectDBs from "../utils/connect";

const { kyaw_san, chaw_su } = connectDBs();

export interface chawsuDocument extends mongoose.Document {
  name: string;
}

const chawsuSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const chawsuModel = chaw_su.model<chawsuDocument>("chawsu", chawsuSchema);
export default chawsuModel;
