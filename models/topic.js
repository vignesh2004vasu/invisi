import mongoose, { Schema, model, models } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = models.Topic || model("Topic", topicSchema);

export default Topic;