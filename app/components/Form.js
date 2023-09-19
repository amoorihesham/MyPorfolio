"use client"
import React from "react";

const Form = () => {
    const sendMsgHandler = (e) => {
        e.preventDefault();
      };
  return (
    <div className="contactForm mt-7">
      <form>
        <div className="form-group grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="left">
            <label
              htmlFor="nameInput"
              className="block mb-1 text-slate-100 font-semibold"
            >
              Name:
            </label>
            <input
              className="w-full  bg-white  border border-slate-300 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              id="nameInput"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="right">
            <label
              htmlFor="lastNameInput"
              className="block mb-1 text-slate-100 font-semibold"
            >
              Last Name:
            </label>
            <input
              className=" w-full  bg-white  border border-slate-300 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              id="lastNameInput"
              type="text"
              name="lastName"
              placeholder="Your Last Name"
            />
          </div>
        </div>
        <div className="form-group grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
          <div className="left">
            <label
              htmlFor="emailInput"
              className="block mb-1 text-slate-100 font-semibold"
            >
              Email:
            </label>
            <input
              className="w-full  bg-white  border border-slate-300 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              id="emailInput"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="right">
            <label
              htmlFor="countryInput"
              className="block mb-1 text-slate-100 font-semibold"
            >
              Country:
            </label>
            <input
              className=" w-full  bg-white  border border-slate-300 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              id="countryInput"
              type="text"
              name="country"
              placeholder="Your Country"
            />
          </div>
        </div>
        <div className="form-group mt-4">
          <label
            htmlFor="subjectInput"
            className="block mb-1 text-slate-100 font-semibold"
          >
            Subject:
          </label>
          <input
            className="w-full  bg-white  border border-slate-300 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            id="subjectInput"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-group mt-4">
          <label
            htmlFor="msgInput"
            className="block mb-1 text-slate-100 font-semibold"
          >
            Message:
          </label>
          <textarea
            className="w-full  bg-white  resize-none  border border-slate-300 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            id="msgInput"
            type="text"
            name="msg"
            placeholder="Message"
          />
        </div>
        <div className="form-group mt-4">
          <button
            type="submit"
            className="rounded-full bg-blue-600 text-white block py-3 px-5 w-full hover:bg-blue-900 transition-colors duration-500 active:scale-95 "
            onClick={sendMsgHandler}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
