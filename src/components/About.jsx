"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBrain, FaChartLine } from "react-icons/fa";


export default function About() {


const cards = [

{
icon:<FaBrain />,
title:"AI & Machine Learning",
text:"Building predictive models and intelligent solutions using modern ML techniques."
},


{
icon:<FaChartLine />,
title:"Data Analytics",
text:"Transforming raw data into meaningful insights through visualization and storytelling."
},


{
icon:<FaGraduationCap />,
title:"Engineering Background",
text:"Agricultural Engineering student specialized in Solar Energy and smart solutions."
}

];




return (

<section
id="about"
className="
py-16
md:py-24
px-4
sm:px-6
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
y:40
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
text-3xl
sm:text-4xl
md:text-5xl
font-bold
text-center
">

About

<span className="text-yellow-400">
 Me
</span>


</h2>






<p className="
text-center
text-slate-300
mt-5
max-w-3xl
mx-auto
text-sm
sm:text-base
md:text-lg
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

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-5

md:gap-8

mt-10

md:mt-16

">





{

cards.map((card,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.5,
delay:index*0.15
}}


viewport={{
once:true
}}



whileHover={{
scale:1.03
}}




className="
bg-white/5
backdrop-blur-lg
border
border-white/10
rounded-3xl
p-5
sm:p-7
hover:border-yellow-400
transition
"

>



<div className="
text-yellow-400
text-3xl
sm:text-4xl
mb-4
">

{card.icon}

</div>






<h3 className="
text-xl
sm:text-2xl
font-bold
mb-3
">

{card.title}

</h3>






<p className="
text-sm
sm:text-base
text-slate-300
leading-relaxed
">

{card.text}

</p>





</motion.div>


))


}




</div>







</div>


</section>


);


}