import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="">
            <img src="/contact.svg" alt="contact" />
          </div>
          <div className="">
            <form>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Message"
                  rows={5}
                />
              </div>
              <div className="mb-4">
                <button className="button text-white text-center rounded-md p-2 w-full">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
