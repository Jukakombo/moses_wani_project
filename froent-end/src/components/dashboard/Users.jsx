import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const res = await axios.get("http://localhost:9000/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchusers();
  }, []);
  return (
    <div>
      <UserTable users={users} />
    </div>
  );
};

export default Users;
