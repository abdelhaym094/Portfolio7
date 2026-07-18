"use client";

import { motion } from "framer-motion";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaRobot,
  FaCode
} from "react-icons/fa";


export default function Skills() {


const skills = [

{
name:"Python",
icon:<FaPython/>,
level:"Advanced"
},

{
name:"Machine Learning",
icon:<FaBrain/>,
level:"Advanced"
},

{
name:"Data Analysis",
icon:<FaChartBar/>,
level:"Advanced"
},

{
name:"SQL",
icon:<FaDatabase/>,
level:"Intermediate"
},

{
name:"Artificial Intelligence",
icon:<FaRobot/>,
level:"Intermediate"
},

{
name:"Software Development",
icon:<FaCode/>,
level:"Intermediate"
}

];



return (

<section
id="skills"
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
mb-16
"

>

Technical

<span className="text-yellow-400">
 Skills
</span>


</motion.h2>





<div className="
grid
md:grid-cols-3
gap-8
">


{

skills.map((skill,index)=>(


<motion.div


key={skill.name}


initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}



whileHover={{
scale:1.05
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
text-5xl
flex
justify-center
mb-5
">

{skill.icon}

</div>




<h3 className="
text-2xl
font-bold
">

{skill.name}

</h3>



<p className="
mt-3
text-slate-300
">

{skill.level}

</p>



<div className="
mt-5
h-2
bg-white/10
rounded-full
overflow-hidden
">


<div

className="
h-full
bg-yellow-400
rounded-full
"

style={{

width:
skill.level==="Advanced"
?
"90%"
:
"70%"

}}

/>


</div>




</motion.div>


))


}



</div>


</div>


</section>


);

}