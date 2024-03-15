import axios from "axios";
import { useEffect, useState } from "react";
import TrackingTable from "./TackingTable";

const Tracking = () => {
  const [tracking, setTracking] = useState({
    CourseCode: "",
    Issue: "",
    Description: "",
    Status: "",
  });
  const handleChange = (e) => {
    setTracking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/trackings", tracking);
      // navigate("/");
      console.log(tracking);
    } catch (error) {
      console.log(error);
    }
  };
  // retrieve tracking data
  const [trackings, setTrackings] = useState([]);

  useEffect(() => {
    const fetchTrackings = async () => {
      try {
        const res = await axios.get("http://localhost:9000/trackings");
        setTrackings(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrackings();
  }, []);
  return (
    <div>
      <div className="bg-[#F5F5F5] rounded-md p-2">
        <div className=" grid grid-cols-2 gap-8 my-2">
          <div className="flex flex-col">
            <label className="font-bold">Course Code</label>
            <input
              type="text"
              name="CourseCode"
              placeholder="Course Code"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Issue </label>
            <input
              type="text"
              name="Issue"
              placeholder="Issue  "
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />{" "}
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Description </label>
            <input
              type="text"
              name="Description"
              placeholder="Description  "
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Status </label>
            <input
              type="text"
              name="Status"
              placeholder="Status"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
        </div>
        <button
          className="bg-blue-600 p-2 w-full  my-4 text-white rounded-md"
          onClick={handleClick}
        >
          Sumit
        </button>
        <TrackingTable trackings={trackings} />
      </div>
    </div>
  );
};

export default Tracking;
