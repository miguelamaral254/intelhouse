import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// services data
const services = [
  {
    name: "Controle Centralizado:",
    description:
      " Permite controlar todos os dispositivos e sistemas da casa a partir de um único aplicativo, proporcionando conveniência e facilidade de uso.",
  },
  {
    name: "Automatização:",
    description:
      " Oferece a capacidade de automatizar tarefas cotidianas, como ajustar a iluminação, temperatura, segurança e entretenimento, tornando a vida mais eficiente.",
  },
  {
    name: "Personalização:",
    description:
      " Permite personalizar as configurações de acordo com as preferências individuais, criando um ambiente sob medida para cada morador.",
  },
  {
    name: "Conectividade:",
    description:
      " Integra-se com uma variedade de dispositivos e protocolos de casa inteligente, garantindo compatibilidade e expansibilidade.",
  },
  {
    name: "Segurança:",
    description:
      " Ajuda a reforçar a segurança da residência por meio do monitoramento e controle de sistemas de segurança, como câmeras e sensores.",
  },
  {
    name: "Eficiência Energética:",
    description:
      "Contribui para a economia de energia ao otimizar o uso de eletricidade e aquecimento, tornando a casa mais sustentável.",
  },
  {
    name: "Controle Remoto:",
    description:
      "Permite o gerenciamento da casa de qualquer lugar, usando dispositivos móveis, proporcionando flexibilidade e tranquilidade.",
  },
];

const Benefits = () => {
  return (
    <section className="" id="services">
      <div className=" mx-auto">
        <div
          className="
        bg-benefitsbg
        bg-no-repeat 
        bg-cover 
        
        overflow-hidden
        min-h-[100vh]
        lag:min-h-[78vh]
        flex
        flex-col
        lg:flex-row
        lg:gap-x-5
        "
        >
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1
          lg:bg-services
          
          lg:bg-bottom
          bg-no-repeat
          
          mb-12
          lg:mb-0"
          >
            <div className="lg: p-10">
              <h2
                className="
              h2
              font-bold
              text-white
              mb-6"
              >
                O que o SmartUp ofecerer?
              </h2>
              <h3
                className="
              font-primary
              max-w-[1055px]
              mb-16"
              >
                O SmartUP é um aplicativo para casas inteligentes que oferece
                controle centralizado, automação e segurança, além de permitir o
                controle remoto, tornando as residências mais inteligentes e
                práticas. O SmartUP é uma solução completa para tornar a sua
                casa mais inteligente, conveniente e segura, adaptando-se às
                necessidades e estilos de vida individuais.
              </h3>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="
                   border-b
                   border-white/20h-[146px]
                   mb-[38px]
                   flex"
                    key={index}
                  >
                    <div
                      className="
                    max-w-[476px]"
                    >
                      <h4
                        className="
                      text-[18px]
                      tracking-wilder
                      font-primary
                      font-semibold
                      mb-0"
                      >
                        {name}
                      </h4>
                      <p
                        className="
                      font-secondary
                      leading-tight"
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
