import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { AiOutlineMail } from "react-icons/ai";

const Contact = ({ setIsMouseOverContact }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <div className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-secondary p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your good name?"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email address?"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              onMouseEnter={() => setIsMouseOverContact(true)}
              onMouseOut={() => setIsMouseOverContact(false)}
              rows={6}
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="How can I help?"
              className="bg-primary resize-none py-4 px-6 min-h-[200px] max-h-[200px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="ml-2 mt-2 text-sm text-primary">
              Make sure the message is at least 100 characters long.
            </p>
          </label>

          <button
            type="submit"
            className="w-[150px] mt-4 flex flex-row justify-between items-center bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-white hover:white rounded"
          >
            {loading ? "Sending..." : "Send"}
            <AiOutlineMail />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
