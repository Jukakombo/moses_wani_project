import axios from "axios";
import { useEffect, useState } from "react";
import TrackingTable from "./TackingTable";

const Tracking = () => {
  const [success, setSucess] = useState(false);
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
    } catch (error) {
      console.log(error);
    }
    clearTrackings();
    setTimeout(() => {
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 3000);
    }, 3000);
  };
  const clearTrackings = () => {
    setTracking({
      CourseCode: "",
      Issue: "",
      Description: "",
      Status: "",
    });
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
        <form onSubmit={handleClick} className=" grid grid-cols-2 gap-8 my-2">
          <div className="flex flex-col">
            <label className="font-bold">Course Code</label>
            <input
              type="text"
              name="CourseCode"
              placeholder="Course Code"
              value={tracking.CourseCode}
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
              value={tracking.Issue}
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
              value={tracking.Description}
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
              value={tracking.Status}
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <button
            className="bg-blue-600 p-2 w-full  my-4 text-white rounded-md"
            type="submit"
          >
            Sumit
          </button>
          {success && (
            <div className="rounded-md text-white p-2 w-full bg-green-600 text-xl font-bold ">
              Tracking Successfully Taken ✨🚀✨🚀✨🚀
            </div>
          )}
        </form>
        <TrackingTable trackings={trackings} />
      </div>
    </div>
  );
};

export default Tracking;
