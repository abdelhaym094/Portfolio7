"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaDatabase,
  FaBrain,
  FaCode
} from "react-icons/fa";


export default function Experience(){


const experiences=[

{
icon:<FaGraduationCap/>,
title:"Agricultural Engineering Student",
place:"Al-Azhar University",
date:"2023 - 2027",
description:
"Studying Agricultural Engineering with specialization in Solar Energy, combining engineering concepts with modern technology."
},


{
icon:<FaDatabase/>,
title:"Data Science Journey",
place:"Python | SQL | Data Analysis",
date:"2025 - Present",
description:
"Building strong foundations in data analysis, visualization, statistics, and extracting insights from real-world datasets."
},


{
icon:<FaBrain/>,
title:"Machine Learning & AI",
place:"ML Engineer Path",
date:"2025 - Present",
description:
"Developing predictive models using Scikit-learn, LightGBM, XGBoost, CatBoost and applying ML to practical problems."
},


{
icon:<FaCode/>,
title:"Portfolio & Real Projects",
place:"Data Applications",
date:"Present",
description:
"Creating dashboards, AI tools, and intelligent systems that transform data into business solutions."
}

];



return (

<section
id="experience"
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
y:40
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

My 
<span className="text-yellow-400">
Journey
</span>

</motion.h2>




<div className="
mt-16
space-y-8
">


{
experiences.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
x:index%2===0?-50:50
}}

whileInView={{
opacity:1,
x:0
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
flex
gap-6
hover:border-yellow-400
transition
"


>


<div className="
text-yellow-400
text-4xl
">

{item.icon}

</div>


<div>


<h3 className="
text-2xl
font-bold
">

{item.title}

</h3>


<p className="
text-yellow-400
mt-1
">

{item.place}

</p>


<p className="
text-slate-400
text-sm
mt-1
">

{item.date}

</p>


<p className="
text-slate-300
mt-4
leading-relaxed
">

{item.description}

</p>


</div>


</motion.div>


))
}


</div>


</div>


</section>


);

}