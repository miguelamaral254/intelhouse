import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
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
          <div >
            <img src={logo} alt="lgo" className="bg-blend-color-burn"/>
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
              <BiUser />
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
              <BsClipboardData />
            </Link>
            <Link
              to="work"
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
              <BsBriefcase />
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
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
