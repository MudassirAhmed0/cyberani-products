"use client";
import React, { useState } from "react";
import DropDownField from "./components/DropDownField";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import LinkBtn from "../link-buttons/LinkBtn";

interface Props {
  fromContactPage?: boolean;
  arabic?: boolean;
}

const Form = ({ fromContactPage, arabic }: Props) => {
  const [formData, setFormData] = useState({
    inquiry: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    inquiry: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    let newErrors = {
      inquiry: "",
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.inquiry) {
      newErrors.inquiry = "Please select an inquiry type.";
      isValid = false;
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Message subject is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Submit the form (e.g., API call)
    }
  };

  return (
    <form
      data-aos="fade-up"
      data-aos-delay="400"
      className={`${
        fromContactPage ? "lg:w-[54.3055555556vw]" : "lg:w-[46.5277777778vw]"
      } common_form w-full flex flex-col lg:gap-y-sp40 gap-10 text-white font-medium`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap justify-between lg:gap-x-[0.97222222222vw] lg:gap-y-sp20 gap-5">
        <DropDownField
          error={errors.inquiry}
          onSelect={(value) => setFormData({ ...formData, inquiry: value })}
        />
        <InputField
          placeholder="Name"
          error={errors.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />
        <InputField
          placeholder="Email"
          type="email"
          error={errors.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />
        <InputField
          placeholder="Message Subject"
          fullWidth
          error={errors.subject}
          onChange={(value) => setFormData({ ...formData, subject: value })}
        />
        <TextAreaField
          placeholder="Message"
          error={errors.message}
          onChange={(value) => setFormData({ ...formData, message: value })}
        />
      </div>
      <div
        className={`${
          fromContactPage ? "lg:justify-center" : "lg:justify-start"
        } w-full flex sm:justify-center`}
      >
        <LinkBtn
          text={fromContactPage ? "Send" : "Send a Request"}
          tag={"button"}
          arabic={arabic}
        />
      </div>
    </form>
  );
};

export default Form;
