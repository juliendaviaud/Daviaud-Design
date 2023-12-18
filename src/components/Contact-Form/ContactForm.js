import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

const ContactForm = () => {
  const validatedMessage = useRef(null);
  const errorMessage = useRef(null);
  const form = useRef();
  const [data, setData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
	if (data.name !== "" && data.email !== "" && data.phone !== "" && isValidEmail(data.email)) {
		emailjs
      .sendForm(
        "service_1v6ugk6",
        "template_391iq5m",
        form.current,
        "7YZz1VwfsI6U9iPce"
      )
      .then(
        (result) => {
			if (!errorMessage.current.classList.contains('display-none')) {
				errorMessage.current.classList.add("display-none");
			}
			validatedMessage.current.classList.remove("display-none");
		},
        (error) => {
			errorMessage.current.classList.remove("display-none");
        }
      );
    e.target.reset();
	}
	else {
		errorMessage.current.classList.remove("display-none");
	}
  };

  return (
    <form
      ref={form}
      method="post"
      onSubmit={sendEmail}
      className="contact-form"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={data.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        onChange={handleChange}
        value={data.email}
      />
      <input
        type="phone"
        name="phone"
        placeholder="Phone number"
        onChange={handleChange}
        value={data.phone}
      />
      <p ref={validatedMessage} className="validated-message display-none">
      Information well sent. <br />I will get back to you as soon as possible
        time limit
      </p>
	  <p ref={errorMessage} className="error-message display-none">
    There appears to be an error with the information you provided. <br />Try Again.
      </p>
      <button className="gradient-button">Be recontacted</button>
    </form>
  );
};

export default ContactForm;
