import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-aboutbg bg-no-repeat bg-cover overflow-hidden  min-h-[85vh]
      lag:min-h-[78vh]"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row lg:items-center lg:gap-x-8 lg:gap-y-0 h-auto lg:h-screen">
          {/* Img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat bg-top"
            style={{
              height: "50vh",
            }}
          ></motion.div>

          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-black/20 rounded-xl mt-4 lg:mt-24 p-4 lg:p-10"
          >
            <span className="text-[28px] lg:text-[48px] font-bold leading-[0.8] text-accent">
              SmartUp
            </span>
            <h1 className="font-primary px-2 mt-4 mb-2 lg:mb-4">
              Uma nova experiência no mercado SmartHome.
            </h1>
            <p className="mb-4">
              O SmartUP é um gerenciador de smart home que representa a
              vanguarda da tendência de casas inteligentes. Oferece uma
              experiência inovadora, permitindo o controle completo de
              dispositivos e sistemas por meio de smartphones e comandos de voz.
              Automatiza tarefas e personaliza o ambiente para atender às
              preferências individuais. É a escolha ideal para quem busca uma
              casa mais inteligente, prática e segura. O SmartUP redefine a
              forma como interagimos com nossas residências.
            </p>
            <div className="flex gap-4 items-center">
              <button className="btn text-white border border-white btn-lg">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Fale com a gente
                </Link>
              </button>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.youtube.com/watch?v=1P5yyeeYF9o"
                  target="_blank"
                  className="text-white btn-link"
                >
                  Confira nossos planos!!
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
