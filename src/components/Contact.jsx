import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { fadeIn } from "../variants";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formState, handleSubmit] = useForm("mnqyyylv");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.errors.length === 0) {
      try {
        await handleSubmit(event);

        if (formState.succeeded) {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 6000);

          // Clear the fields
          setEmail("");
          setName("");
          setMessage("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="bg-benefitsbg bg-no-repeat bg-cover overflow-hidden pt-5" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row min-h-auto lg:min-h-[78vh]">
          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-start items-center lg:ml-5 lg:pt-5 lg:pt-12 "
          ><div className="flex flex-col justify-end"> {/* Adiciona a classe flex-col e justify-end */}
          <h4 className="text-[24px] lg:text-[36px] font-bold text-white mb-4">
            Precisa de ajuda?
          </h4>
          <h2 className="font-primary max-w-[400px] lg:max-w-[1055px] mb-4">
            Nos mande uma mensagem
          </h2>
        </div>
            <div className="flex p-20 mb-6 w-full bg-team bg-no-repeat bg-cover overflow-hidden">
              
              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="flex text-xl lg:text-2xl gap-x-4 max-w-max mx-auto lg:mx-0"
              >
                
              </motion.div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleFormSubmit}
            className="flex-1 border rounded-3xl flex flex-col gap-y-4 p-4 lg:p-8 items-start"
          >
            {showMessage && (
              <div className="text-gradient mb-4">
                <span>Thanks for your message! I'll be in touch soon.</span>
              </div>
            )}

            <input
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="email"
              id="email"
              type="email"
              placeholder="Seu e-mail"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={formState.errors}
            />
            <input
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={formState.errors}
            />
            <textarea
              className="bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none"
              id="message"
              name="message"
              type="text"
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={formState.errors}
            />
            <button
              className="btn btn-lg border"
              type="submit"
              disabled={formState.submitting}
            >
              Enviar
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
