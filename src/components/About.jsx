"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBrain, FaChartLine } from "react-icons/fa";


export default function About() {


  const cards = [

    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      text: "Building predictive models and intelligent solutions using modern ML techniques."
    },


    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      text: "Transforming raw data into meaningful insights through visualization and storytelling."
    },


    {
      icon: <FaGraduationCap />,
      title: "Engineering Background",
      text: "Agricultural Engineering student specialized in Solar Energy and smart solutions."
    }

  ];



  return (

    <section
      id="about"
      className="
      py-24
      px-6
      "
    >



      <div className="
      max-w-6xl
      mx-auto
      ">



        {/* Title */}


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          viewport={{
            once:true
          }}

        >


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          ">

            About <span className="text-yellow-400">
              Me
            </span>


          </h2>




          <p className="
          text-center
          text-slate-300
          mt-6
          max-w-3xl
          mx-auto
          text-lg
          leading-relaxed
          ">


            I am Mohamed Abdelhay, a Data Scientist passionate about
            transforming data into intelligent decisions.
            My journey combines engineering thinking with Artificial
            Intelligence to build practical solutions.



          </p>



        </motion.div>







        {/* Cards */}



        <div className="
        grid
        md:grid-cols-3
        gap-8
        mt-16
        ">



          {cards.map((card,index)=>(


            <motion.div


              key={index}


              initial={{
                opacity:0,
                y:60
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              transition={{
                duration:0.5,
                delay:index*0.2
              }}


              viewport={{
                once:true
              }}



              className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-yellow-400
              transition
              "


            >



              <div className="
              text-yellow-400
              text-4xl
              mb-5
              ">

                {card.icon}

              </div>




              <h3 className="
              text-2xl
              font-bold
              mb-4
              ">

                {card.title}

              </h3>



              <p className="
              text-slate-300
              leading-relaxed
              ">

                {card.text}

              </p>



            </motion.div>



          ))}



        </div>





      </div>


    </section>


  );

}