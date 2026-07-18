"use client";


import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart
} from "react-icons/fa";



export default function Footer(){


  return (


    <footer
      className="
      border-t
      border-white/10
      mt-20
      py-10
      px-6
      "
    >



      <div className="
      max-w-6xl
      mx-auto
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-6
      ">



        {/* Brand */}

        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >


          <h3 className="
          text-2xl
          font-bold
          ">

            Mohamed
            <span className="text-yellow-400">
              Abdelhay
            </span>

          </h3>



          <p className="
          text-slate-400
          mt-2
          ">

            Data Scientist | AI & Machine Learning Enthusiast

          </p>


        </motion.div>







        {/* Social Links */}


        <div className="
        flex
        gap-5
        ">



          <a

          href="https://github.com/abdelhaym953-create"

          target="_blank"

          className="
          w-12
          h-12
          rounded-full
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          text-xl
          hover:text-yellow-400
          hover:border-yellow-400
          transition
          "

          >

            <FaGithub />

          </a>






          <a

          href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"

          target="_blank"

          className="
          w-12
          h-12
          rounded-full
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          text-xl
          hover:text-yellow-400
          hover:border-yellow-400
          transition
          "

          >

            <FaLinkedin />

          </a>






          <a

          href="mailto:abdelhaym953@gmail.com"

          className="
          w-12
          h-12
          rounded-full
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          text-xl
          hover:text-yellow-400
          hover:border-yellow-400
          transition
          "

          >

            <FaEnvelope />

          </a>



        </div>



      </div>







      {/* Bottom */}

      <div className="
      text-center
      mt-10
      pt-6
      border-t
      border-white/10
      text-slate-500
      text-sm
      ">


        <p>

          © 2026 Mohamed Abdelhay. All Rights Reserved.

        </p>


        <p className="
        mt-2
        flex
        justify-center
        items-center
        gap-2
        ">

        

        </p>



      </div>



    </footer>


  );

}