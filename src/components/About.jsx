import React from "react";
// countup
import CountUp from "react-countup";
// intersection oberver hook
import { useInView } from "react-intersection-observer";
//import icons
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
//link
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" ref={ref}>
      <div
        className="
      
      mx-auto"
      >
        <div
          className="
        bg-aboutbg  
        bg-no-repeat 
        bg-cover 
        overflow-hidden
        flex
        flex-col
        
        lg:flex-row
        lg:items-center
        lg:gap-x-20
        lg:gap-y-0
        h-screen"
        >
          {/* Img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1
          bg-about
          bg-contain
          bg-no-repeat
          h-[640px]
          
          
          
  
          bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-black/20 rounded-xl mt-24 pt-0 p-10"
          >
            <span
              className="
              text-[45px]
              pb-20
              font-bold
              leading-[0.8]
              lg:text-[70px]

              
              
            text-accent"
            >
              SmartUp
            </span>
            <h1
              className="
            font-primary
            px-2
            mb-4"
            >
              {" "}
              Uma nova experiência no mercado SmartHome.
            </h1>
            <p className="mb-6">
              O SmartUP é um gerenciador de smart home que representa a
              vanguarda da tendência de casas inteligentes. Oferece uma
              experiência inovadora, permitindo o controle completo de
              dispositivos e sistemas por meio de smartphones e comandos de voz.
              Automatiza tarefas e personaliza o ambiente para atender às
              preferências individuais. É a escolha ideal para quem busca uma
              casa mais inteligente, prática e segura. O SmartUP redefine a
              forma como interagimos com nossas residências.
            </p>

            <div
              className="
            flex
            
            gap-x-8
            items-center"
            >
              <button
                className="
                btn
                text-white
                border
                border-white
                btn-lg"
              >
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Fale com a gente
                </Link>
              </button>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://www.youtube.com/watch?v=1P5yyeeYF9o"
                    target="_blank"
                    className="text-white btn-link"
                  >
                    Confira nossos planos!!
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
