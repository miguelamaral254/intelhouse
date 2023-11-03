import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/services.png"
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
    <section
      className="bg-benefitsbg bg-no-repeat bg-cover overflow-hidden "
      id="services"
    >
      <div className="container mx-auto p-5">
        <div className="min-h-auto lg:min-h-[78vh] flex flex-col lg:flex-row lg:gap-x-5">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="p-4 lg:p-10">
              <h2 className="text-[24px] lg:text-[36px] font-bold text-white mb-4">
                O que o SmartUp oferece?
              </h2>
              <h3 className="font-primary max-w-[400px] lg:max-w-[1055px] mb-4">
                O SmartUP é um aplicativo para casas inteligentes que oferece
                controle centralizado, automação e segurança, além de permitir o
                controle remoto, tornando as residências mais inteligentes e
                práticas. O SmartUP é uma solução completa para tornar a sua
                casa mais inteligente, conveniente e segura, adaptando-se às
                necessidades e estilos de vida individuais.
              </h3>
            </div>
             <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="
          hidden
          lg:flex
          flex-1
          max-w-[520px]
          pb-32
          "
          >
            <img src={Image} alt="Imagem" />
          </motion.div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div className="border-b border-white/20 mb-4" key={index}>
                    <div className="max-w-[280px] lg:max-w-[476px] p-4">
                      <h4 className="text-[18px] lg:text-[24px] font-primary font-semibold mb-1">
                        {name}
                      </h4>
                      <p className="font-secondary leading-relaxed">
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
