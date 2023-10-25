import React from "react";
//images
import Image from "../assets/cell.png";
//link
import { Link } from "react-scroll";

// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="
      pt-24
      bg-banner 
      bg-no-repeat 
      bg-cover 
      overflow-hidden
    min-h-[85vh]
    lag:min-h-[78vh]
    flex
    items-start"
      id="home"
    >
      <div
        className="
      container
      mx-auto"
      >
        <div
          className="
        flex
        flex-col
        gap-y-8
        lg:flex-row
        lg:items-center
        lg:gap-x-12"
        >
          
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="
          hidden
          lg:flex
          w-full
          h-full
          flex-1
          max-w-[420px]
          lg:max-w-[682px]
          "
          >
            <img src={Image} alt="Imagem" />
          </motion.div>
          {/* text */}
          <div
            className="
          flex-1
          text-center
          font-secondary
          lg:text-left
          "
          >
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
            text-[55px]
            font-bold
            leading-[0.8]
            lg:text-[70px]
            pb-2"
            >
              Gerencie seus dispositivos de forma inteligente
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
              mb-6
              text-[16px]
              lg:text-[20px]
              font-secondary
              font-semibold
              uppercase
              leading-[1]"
            >
              <span
                className="
                text-white
                mr-4
                
                "
              >
                Transforme sua experiência em grenciciar seus dispositivos
                IntelSmarts com a{" "}
                <TypeAnimation
                  sequence={["Agilidade", 2000, "Praticidade", 2000]}
                  speed={50}
                  className="
                text-amber-200"
                  wrapper="span"
                  repeat={Infinity}
                />{" "}
                que só o SmartUp tem
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
              mb-8
              max-w-lg
              mx-auto
              lg:mx-0"
            ></motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
              flex
              max-w-max
              gap-x-6
              items-center
              mb-12
              mx-auto
              lg:mx-0"
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
                  to="about"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Saiba mais
                </Link>
              </button>
              <a
                href="#"
                className="
              
                btn-link"
              >
                <Link to="work" activeClass="active" smooth={true} spy={true}>
                  Teste grátis
                </Link>
              </a>
            </motion.div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
