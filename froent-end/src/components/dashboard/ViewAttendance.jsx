import { useEffect, useState } from "react";
import AttendanceTable from "./AttendanceTable";
import axios from "axios";

const ViewAttendance = () => {
  // retrieve tracking data
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
      <AttendanceTable attendances={attendances} />
    </div>
  );
};

export default ViewAttendance;
