"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";


export default function Navbar(){


const [open,setOpen]=useState(false);



return (

<motion.nav

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:0.6
}}

className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-xl
bg-white/5
border-b
border-white/10
"


>


<div
className="
max-w-6xl
mx-auto
px-5
sm:px-6
py-3
sm:py-4
flex
justify-between
items-center
"
>


{/* Logo */}

<h1
className="
text-xl
sm:text-2xl
font-bold
text-yellow-400
"
>

Mohamed.AI

</h1>






{/* Desktop Links */}

<div
className="
hidden
md:flex
gap-8
text-slate-300
"
>


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







{/* Desktop Social */}

<div
className="
hidden
sm:flex
gap-4
"
>


<a
href="https://github.com/abdelhaym953-create"
target="_blank"
>

<FaGithub
size={20}
className="hover:text-yellow-400 transition"
/>

</a>




<a
href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
target="_blank"
>

<FaLinkedin
size={20}
className="hover:text-yellow-400 transition"
/>

</a>


</div>







{/* Mobile Button */}

<button

className="
md:hidden
text-yellow-400
text-xl
"

onClick={()=>setOpen(!open)}

>


{
open ?

<FaTimes/>

:

<FaBars/>

}


</button>




</div>







{/* Mobile Menu */}

{

open &&

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

className="
md:hidden
bg-black/40
backdrop-blur-xl
border-t
border-white/10
px-6
py-5
"


>


<div
className="
flex
flex-col
gap-5
text-slate-300
"
>


<a 
href="#about"
onClick={()=>setOpen(false)}
className="hover:text-yellow-400"
>
About
</a>


<a 
href="#skills"
onClick={()=>setOpen(false)}
className="hover:text-yellow-400"
>
Skills
</a>


<a 
href="#projects"
onClick={()=>setOpen(false)}
className="hover:text-yellow-400"
>
Projects
</a>


<a 
href="#contact"
onClick={()=>setOpen(false)}
className="hover:text-yellow-400"
>
Contact
</a>



</div>



</motion.div>


}



</motion.nav>


);


}