import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 w-10/12 m-auto">
        <div className="">
          <img src="/qrcode.svg" alt="about" />
          <img src="/instructor.svg" alt="about" />
        </div>
        <div className="text-white">
          <h1 className="text-white font-bold text-xl my-8 tracking-wider">
            Instructions for Using the QR Code Generator for Student ID Cards
          </h1>
          <ol>
            <li>
              <strong>Login or Create an Account:</strong>
              <ul className="text-gray-400 ">
                <li>
                  If you already have an account, log in using your credentials.
                </li>
                <li>
                  If you are new, create an account by providing necessary
                  details.
                </li>
              </ul>
            </li>

            <li>
              <strong>Access the Dashboard:</strong>
              <ul className="text-gray-400 ">
                <li>
                  Upon successful login, you'll be directed to the dashboard.
                </li>
              </ul>
            </li>

            <li>
              <strong>Create Student ID Card:</strong>
              <ul className="text-gray-400 ">
                <li>
                  Locate the "Create Student ID Card" button on the dashboard.
                </li>
                <li>Click on it to proceed.</li>
              </ul>
            </li>

            <li>
              <strong>Fill in Student Data:</strong>
              <ul className="text-gray-400 ">
                <li>
                  Provide the required student information in the designated
                  fields.
                </li>
              </ul>
            </li>

            <li>
              <strong>Submit Information:</strong>
              <ul className="text-gray-400 ">
                <li>
                  Once all necessary details are entered, click the "Submit"
                  button.
                </li>
              </ul>
            </li>

            <li>
              <strong>View Student QR Code:</strong>
              <ul className="text-gray-400 ">
                <li>
                  After submission, you'll see an option to "View Student QR
                  Code".
                </li>
              </ul>
            </li>

            <li>
              <strong>Download QR Code:</strong>
              <ul className="text-gray-400 ">
                <li>Click on the "View Student QR Code" button.</li>
                <li>The QR code will be displayed in PDF format.</li>
                <li>Download the QR code PDF to your device.</li>
              </ul>
            </li>

            <li>
              <strong>Scan QR Code:</strong>
              <ul className="text-gray-400 ">
                <li>
                  The downloaded QR code can be scanned using any QR code
                  scanner app on your smartphone or a dedicated QR code scanner
                  device.
                </li>
              </ul>
            </li>

            <li>
              <strong>Optional: Frame and Display:</strong>
              <ul className="text-gray-400 ">
                <li>Print the downloaded QR code and optionally frame it.</li>
                <li>Display the QR code prominently for easy scanning.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
