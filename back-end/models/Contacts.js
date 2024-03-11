import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    contact: String,
    gradeObtain: String,
    sex: String,
    courseCompleted: String,
    startedYear: String,
    completeYear: String,
    profilePhoto: String,
    customId:String
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
export default Contacts;
