"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navbar() {

  return (

    <motion.nav

      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}

      className="
      fixed 
      top-0 
      left-0 
      w-full 
      z-50 
      backdrop-blur-lg
      bg-white/5
      border-b
      border-white/10
      "

    >

      <div className="
      max-w-6xl 
      mx-auto 
      px-6 
      py-4 
      flex 
      justify-between 
      items-center
      ">


        {/* Logo */}

        <h1 className="
        text-2xl 
        font-bold
        text-yellow-400
        ">

          Mohamed.AI

        </h1>



        {/* Links */}

        <div className="
        hidden
        md:flex
        gap-8
        text-slate-300
        ">


          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>


          <a href="#skills" className="hover:text-yellow-400 transition">
            Skills
          </a>


          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>


          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>


        </div>



        {/* Social */}

        <div className="flex gap-4">


          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
          >

            <FaGithub 
            size={22}
            className="hover:text-yellow-400 transition"
            />

          </a>



          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
          >

            <FaLinkedin
            size={22}
            className="hover:text-yellow-400 transition"
            />

          </a>



        </div>



      </div>


    </motion.nav>

  );

}