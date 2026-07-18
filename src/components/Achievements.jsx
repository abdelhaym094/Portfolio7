"use client";


import { motion } from "framer-motion";

import {
FaProjectDiagram,
FaChartBar,
FaRobot,
FaTrophy
} from "react-icons/fa";



export default function Achievements(){


const stats=[


{
icon:<FaProjectDiagram/>,
number:"10+",
text:"Data Projects"
},


{
icon:<FaChartBar/>,
number:"5+",
text:"Interactive Dashboards"
},


{
icon:<FaRobot/>,
number:"ML",
text:"AI & Prediction Models"
},


{
icon:<FaTrophy/>,
number:"Kaggle",
text:"Machine Learning Competitions"
}


];



return (


<section
className="
py-20
px-6
"
>


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-4
gap-6
">


{
stats.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
delay:index*0.1
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
p-8
text-center
hover:border-yellow-400
transition
"

>


<div className="
text-yellow-400
text-4xl
flex
justify-center
mb-4
">

{item.icon}

</div>


<h3 className="
text-3xl
font-bold
">

{item.number}

</h3>


<p className="
text-slate-400
mt-2
">

{item.text}

</p>


</motion.div>


))
}


</div>


</section>


);


}