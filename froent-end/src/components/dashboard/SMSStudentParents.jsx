import axios from "axios";
import  { useEffect, useState } from "react";
import ParentInfoTable from "./ParentTable";

const SMSStudentParents = () => {
  const [parentsInfo, setParentsInfo] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:9000/students");
        setParentsInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <div>
      <ParentInfoTable parents={parentsInfo} />
    </div>
  );
};

export default SMSStudentParents;
