"use-client";
import React, { useEffect, useRef,useCallback  } from "react";
import { useState } from 'react';
import { useReCaptcha } from "next-recaptcha-v3";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input';
import moment from 'moment';
import axios from "axios";
moment().format();
 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Form = () => {

 
  const { executeRecaptcha } =useReCaptcha();


  const [FirstName, setFirstName] = useState<any>("");
  const [LastName, setLastName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [Phone, setPhone] = useState<any>("");
  const [validPhone, setValidPhone] = useState<any>(false);
  const [contactDate, setcontactDate] = useState<any>("");
  const [contactTime, setcontactTime] = useState<any>("");
  const [Submitted, setSubmitted] = useState<any>(false);





  const handleFirstName = (e:any) => {
    let value = e?.target?.value;
    setFirstName(value);
  };
  const handleLastName = (e:any) => {
    let value = e?.target?.value;
    setLastName(value);
  };
  const handleemail = (e:any) => {
    let value = e?.target?.value;
    setEmail(value);
  };
  const handlePhone = (e:any) => {
    let value = e;
    setValidPhone(isValidPhoneNumber(value));
    setPhone(value);
  };
  const handlecontactDate = (e:any) => {
    let value = e?.target?.value;
    setcontactDate(value);
  };
  const handlecontactTime = (e:any) => {
    let value = e?.target?.value;
    setcontactTime(value);
  };


  const successtoast = (msg:string)=>{
    toast.success(msg, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      toastId: "successToast"
      });
  }

  const errorToast = (msg:string)=>{
    toast.error(msg, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      toastId: "errorToast"
      });
  }

  const handleSubmit = async (e:any) => {
    setSubmitted(true);
    e.preventDefault();
    const contactFormattedTime = moment(contactTime||"14:00",'hh:mm').format("hh:mm a");
    const token =  await executeRecaptcha("form_submit");
    let jsondata = {gRecaptchaToken:token,FirstName:FirstName, LastName:LastName, email:email,Phone:Phone, contactDate:contactDate, contactTime:contactTime,contactFormattedTime:contactFormattedTime}
    try {
      const res = await axios.post(
        "/api/Captcha",
        jsondata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if((res?.data?.status )==="success"){
        setSubmitted(false);
        successtoast("The form has been submitted.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      } else {
        errorToast("Could not submit the form. Please try again later.");
        setSubmitted(false);
      }
    } catch (e) {
      errorToast("Could not submit the form. Please try again later.");
      setSubmitted(false);
    };

  };





  return (
    <div className="form m-auto mt-4">
      <form onSubmit={handleSubmit}>
        <kbd>
          {" "}
          <strong>Contact Us</strong>
        </kbd>

        <div className="grid">
          <label
            htmlFor="firstname"
            data-tooltip="First name"
            data-placement="top">
            First name
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={FirstName}
              placeholder="First name"
              required
              // value={FirstName}
              onChange={(e) => {
                handleFirstName(e);
              }}
            />
          </label>
          <label
            htmlFor="lastname"
            data-tooltip="Last name"
            data-placement="top">
            Last name
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
              required
              value={LastName}
              onChange={(e) => {
                handleLastName(e);
              }}
            />
          </label>
        </div>
        <div className="d-flex justify-center flex-col gap-4">
          <label htmlFor="email" data-tooltip="Email" data-placement="top">
            Email address
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => {
                handleemail(e);
              }}
            />
          </label>
          <small data-tooltip=":)">
            We'll never share your email with anyone else.
          </small>

          {/* <Divider className="mb-5"></Divider> */}
          <label data-tooltip="Phone Number" data-placement="top">
            Phone Number
            <PhoneInput
            id="phoneNumber"
            defaultCountry="NP"
            value={Phone}
            onChange={handlePhone}
            rules={{ required: true }}
            />
            {/* <input
              type="tel"
              id="phoneNumber"
              name="Phone Number"
              placeholder="Phone Number"
              required
              // value={Phone}
              onChange={(e) => {
                handlePhone(e);
              }}
            /> */}
          </label>
        </div>
        <div className="grid">
          <label htmlFor="date" data-tooltip="Date" data-placement="top">
            Date
            <input
              type="date"
              id="date"
              name="date"
              onChange={(e) => {
                handlecontactDate(e);
              }}
            />
          </label>

          <label htmlFor="time" data-tooltip="Time" data-placement="top">
            Time
            <input
              type="time"
              id="time"
              name="time"
             
              onChange={(e) => {
                handlecontactTime(e);
              }}
            />
          </label>
        </div>

       {!Submitted &&  <button
          className="primary"
          data-tooltip="Submit"
          data-placement="top"
          type="submit"
          disabled={!validPhone}
        >
          Submit
        </button>}
      </form>
      <ToastContainer
position="top-right"
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
};


export default Form;

