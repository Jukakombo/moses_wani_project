import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";

function Contact() {
  const [success, setSuccess] = useState(false);

  const [contacts, setContacts] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data in the POST request

      await axios.post("http://localhost:9000/contacts", contacts);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setContacts({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="">
            <img src="/contact.png" alt="contact" />
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={contacts.firstName}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="lastName"
                  value={contacts.lastName}
                  required
                  onChange={handleChange}
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
                  value={contacts.email}
                  name="email"
                  required
                  onChange={handleChange}
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
                  value={contacts.phone}
                  name="phone"
                  required
                  onChange={handleChange}
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
                  value={contacts.subject}
                  name="subject"
                  required
                  onChange={handleChange}
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
                  value={contacts.message}
                  name="message"
                  required
                  onChange={handleChange}
                />
              </div>
              {success && (
                <div className="navigation p-2 mb-4">
                  <h1 className="text-2xl text-white text-center font-bold bg-green-600 rounded-md p-2">
                    Your message has been successfully sent! 🎉
                  </h1>
                </div>
              )}
              <div className="mb-4">
                <button
                  type="submit"
                  className="button text-white text-center rounded-md p-2 w-full"
                >
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
}

export default Contact;
