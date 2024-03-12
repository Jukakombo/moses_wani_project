import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteNews } from "../../actions/news";

const ContactLists = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.news);
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

                <span className="mx-4">
                  {x.createdAt.toLocaleString().slice(0, 10)}
                </span>
                {moment(x.createdAt).fromNow()}
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
                onClick={() => dispatch(deleteNews(x._id))}
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
