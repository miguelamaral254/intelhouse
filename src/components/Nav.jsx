import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { HiDeviceTablet } from "react-icons/hi";
import { TbCheckupList } from "react-icons/tb";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav
      className="
  
  fixed
  w-full
  overflow-hidden
  z-50"
    >
      <div className=" mx-auto">
        {/* nav inner */}
        <div
          className="
      w-full
      bg-black/20
      h-[96px] 
      mx-auto
      px-5
      flex
      justify-between
      items-center
      text-2x1
      text-white/50"
        >
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-24 max-w-[460px] h-auto" /> {/* Estilo para tornar o logo responsivo */}
          </div>
          <div className="flex">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-500}
              className="
                    cursor-pointer
                    w-[60px]
                    h-[60px]
                    flex
                    items-center
                    justify-center"
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="
                    cursor-pointer
                    w-[60px]
                    h-[60px]
                    flex
                    items-center
                    justify-center"
            >
              <HiDeviceTablet />
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              className="
                    cursor-pointer
                    w-[60px]
                    h-[60px]
                    flex
                    items-center
                    justify-center"
            >
              <TbCheckupList />
            </Link>

            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="
                    cursor-pointer
                    w-[60px]
                    h-[60px]
                    flex
                    items-center
                    justify-center"
            >
              <MdSupportAgent />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
