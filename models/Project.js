// mongoose project schema
import { Schema, model, models } from "mongoose";

const Project = new Schema(
  {
    title: {
      type: String,
      default: "New Project",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    data: {
      type: Object,
      required: true,
      default: {},
    },
  },
  {
    timestamps: true,
    collection: "projects",
  }
);

export default models.Project || model("Project", Project);
