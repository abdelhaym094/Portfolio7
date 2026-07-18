"use client";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";


export default function Contact(){


  const contacts=[

    {
      icon:<FaEnvelope/>,
      title:"Email",
      value:"abdelhaym953@gmail.com",
      link:"mailto:abdelhaym953@gmail.com"
    },


    {
      icon:<FaLinkedin/>,
      title:"LinkedIn",
      value:"Mohamed Abdelhay",
      link:"https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
    },


    {
      icon:<FaGithub/>,
      title:"GitHub",
      value:"abdelhaym953-create",
      link:"https://github.com/abdelhaym953-create"
    },


    {
      icon:<FaMapMarkerAlt/>,
      title:"Location",
      value:"Cairo, Egypt",
      link:"#"
    }

  ];



  return (

    <section
      id="contact"
      className="
      py-24
      px-6
      "
    >


      <div className="
      max-w-6xl
      mx-auto
      ">


        <motion.h2

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          "

        >

          Let's Build Something
          <span className="text-yellow-400">
            Amazing
          </span>


        </motion.h2>





        <p className="
        text-center
        text-slate-300
        mt-5
        max-w-2xl
        mx-auto
        text-lg
        ">

          Interested in data science, AI solutions,
          or intelligent dashboards?
          Feel free to contact me.

        </p>






        <div className="
        grid
        md:grid-cols-4
        gap-6
        mt-14
        ">


        {
          contacts.map((item,index)=>(


            <motion.a

            key={item.title}

            href={item.link}

            target="_blank"

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:index*0.15
            }}

            viewport={{
              once:true
            }}

            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-6
            text-center
            hover:border-yellow-400
            hover:-translate-y-2
            transition
            "


            >


              <div className="
              text-yellow-400
              text-4xl
              mb-4
              flex
              justify-center
              ">

                {item.icon}

              </div>



              <h3 className="
              font-bold
              text-xl
              ">

                {item.title}

              </h3>




              <p className="
              text-slate-300
              mt-2
              text-sm
              ">

                {item.value}

              </p>



            </motion.a>


          ))
        }


        </div>



      </div>


    </section>

  );

}