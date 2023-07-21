import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socials } from "../constants";
import { AiOutlineMail } from "react-icons/ai";
import useIsMobile from "../hooks/useIsMobile";

const Contact = ({ setIsMouseOverContact }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.message.length < 100) {
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mohammad Alsmadi",
          from_email: form.email,
          to_email: "smadi.dev@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ah, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 0.5)}
      className={`mt-6 md:mt-12 w-full flex flex-col md:flex-row justify-between`}
    >
      <div className="flex-[1] md:flex-[0.5] flex-col bg-secondary p-4 md:p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 md:mt-6 gap-6 md:gap-8 flex flex-col"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium text-xs md:text-lg mb-2 md:mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your good name?"
              className="bg-primary py-2 md:py-4 px-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs md:text-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium text-xs md:text-lg mb-2 md:mb-4">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email address?"
              className="bg-primary py-2 md:py-4 px-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs md:text-lg"
            />
          </label>
          <label className="flex flex-col relative">
            <span className="text-white font-medium text-xs md:text-lg mb-2 md:mb-4">
              Your Message
            </span>
            <textarea
              onMouseEnter={() => setIsMouseOverContact(true)}
              onMouseOut={() => setIsMouseOverContact(false)}
              rows={6}
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="How can I help?"
              className="bg-primary resize-none py-2 md:py-4 px-4 md:px-6 min-h-[130px] max-h-[150px] md:min-h-[200px] md:max-h-[200px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs md:text-lg"
            />

            <p className="text-xs text-secondary absolute bottom-10 right-2 select-none">
              {form.message.length}
            </p>
            <p className="ml-2 mt-2 text-primary text-[10px] md:text-sm">
              Make sure the message is at least 100 characters long.
            </p>
          </label>

          <div className="flex flex-row items-center justify-between w-full">
            <button
              type="submit"
              className="w-[120px] md:w-[150px] mt-2 md:mt-4 flex flex-row justify-between items-center bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-white hover:white rounded text-sm md:text-lg"
            >
              {loading ? "Sending..." : "Send"}
              <AiOutlineMail />
            </button>
          </div>
        </form>
      </div>
      <div className="flex-[1] md:flex-[0.5] flex flex-row md:flex-col md:justify-center justify-around items-center">
        {!isMobile && <h3 className={styles.sectionHeadText}>My Socials.</h3>}
        <div
          className={
            isMobile
              ? "flex flex-row w-full justify-around mt-2 md:flex-col"
              : ""
          }
        >
          {socials.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              className="w-[50px] h-[50px] md:w-[150px] px-3 mt-2 md:mt-4 flex flex-row justify-between items-center bg-secondary hover:bg-white text-primary font-bold md:py-2 md:px-4 md:border-b-4 md:border-0 border-4 border-white hover:border-secondary hover:white rounded-full md:rounded"
            >
              {!isMobile ? item.text : null}
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
