import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import axios from "axios";
// import moment from "moment";
const ContactLists = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/contacts");
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete message function
  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/contacts/${id}`);
      setContacts(contacts.filter((contac) => contac.id !== id));
      // alert("Contact deleted successfully!");
    } catch (error) {
      console.error(`Error deleting message with ID ${id}:`, error);
    }
  };

  return (
    <div>
      {contacts
        .slice(0)
        .reverse()
        .map((x) => (
          <div
            key={x._id}
            className="my-4 navigation text-white p-4 rounded-md text-bold"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCircleUser size={30} />
                <h1 className="font-bold ml-4">
                  {x.firstName} <span className="mr-4">{x.lastName}</span>
                </h1>
              </div>
              <div className="flex items-center">
                <IoTime size={30} />

                {/* <span className="mx-4">
                  {x.createdAt.toLocaleString().slice(0, 10)}
                </span>
                {moment(x.createdAt).fromNow()} */}
                
              </div>
            </div>
            <div className="my-8 ">
              <div className="flex items-center">
                <FaPhoneSquareAlt size={30} />
                <p className="ml-4">
                  Phone: <span className="ml-4">{x.phone}</span>
                </p>
              </div>
            </div>
            <div className="my-8  ">
              <div className="flex items-center">
                <IoDocument size={30} />
                <p className="ml-4">
                  Subject: <span className="ml-4">{x.subject}</span>
                </p>
              </div>
            </div>
            <div className="my-8 border-t-2 py-2">
              <div className="flex items-center">
                <MdOutlineDocumentScanner size={30} />

                <p className="ml-4">Message:</p>
              </div>
              <p className="p-4 text-gray-200 footer my-4 rounded-md">
                {x.message}
              </p>
              <button
                onClick={() => deleteMessage(x.id)}
                className="bg-red-600 w-full rounded-md p-2"
              >
                Delete Message
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContactLists;
