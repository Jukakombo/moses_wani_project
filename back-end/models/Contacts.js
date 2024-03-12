import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    studentName: String,
    schoolCenter: String,
    classYear: String,
    indexNumber: String,
    nationality: String,
    validTill: String,
    profilePhoto: String,
    nationalNumber: String,
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
export default Contacts;
