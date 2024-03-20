import { useEffect, useState } from "react";
import axios from "axios";
import ModifyAttendanceTable from "./ModifyAttendanceTable";

const ModifyAttendance = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await axios.get("http://localhost:9000/attendances");
        setAttendances(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAttendances();
  }, []);
  return (
    <div>
      <ModifyAttendanceTable attendances={attendances} />
    </div>
  );
};

export default ModifyAttendance;
