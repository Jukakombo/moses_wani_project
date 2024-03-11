import mongoose from "mongoose";
const newsSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);
const News = mongoose.models.News || mongoose.model("News", newsSchema);
export default News;
