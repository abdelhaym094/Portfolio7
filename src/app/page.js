"use client";

import { motion } from "framer-motion";

import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import TypingText from "@/components/TypingText";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";


export default function Home() {


return (

<main className="
min-h-screen
text-white
overflow-hidden
relative
">


{/* BACKGROUND */}

<div className="
absolute
inset-0
bg-gradient-to-br
from-[#020617]
via-[#0f172a]
to-black
z-[-2]
"/>



{/* GOLD LIGHT */}

<div className="
absolute
top-20
left-10
w-96
h-96
bg-yellow-400/20
blur-[140px]
rounded-full
"/>



{/* BLUE LIGHT */}

<div className="
absolute
bottom-10
right-10
w-96
h-96
bg-blue-500/20
blur-[150px]
rounded-full
"/>



<ParticlesBackground />



<div className="
relative
z-10
">


<Navbar />



{/* HERO */}

<section className="
min-h-screen
flex
items-center
px-6
pt-24
">


<div className="
max-w-7xl
mx-auto
w-full
grid
md:grid-cols-2
gap-16
items-center
">



{/* TEXT */}


<motion.div

initial={{
opacity:0,
x:-80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

>



<div className="
inline-flex
bg-yellow-400/10
border
border-yellow-400/30
px-5
py-2
rounded-full
text-yellow-400
mb-6
">

🚀 Data Science & AI Enthusiast

</div>




<h1 className="
text-5xl
md:text-7xl
font-extrabold
leading-tight
">

Mohamed

<span className="
text-yellow-400
">

 Abdelhay

</span>

</h1>





<h2 className="
text-3xl
md:text-4xl
mt-5
font-semibold
">

<TypingText />

</h2>







<p className="
mt-7
text-lg
text-slate-300
leading-relaxed
max-w-xl
">

I build intelligent solutions using 
Machine Learning, Artificial Intelligence,
and Data Analytics.

Transforming raw data into meaningful insights
through predictive models and interactive dashboards.

</p>





<div className="
flex
gap-5
mt-8
flex-wrap
">


<a

href="#projects"

className="
bg-yellow-400
text-black
px-8
py-3
rounded-xl
font-bold
hover:scale-105
transition
"

>

View Projects

</a>





<a

href="https://github.com/abdelhaym953-create"

target="_blank"

className="
border
border-yellow-400
px-8
py-3
rounded-xl
font-bold
hover:bg-yellow-400
hover:text-black
transition
"

>

GitHub

</a>






<a

href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"

target="_blank"

className="
border
border-white/20
px-8
py-3
rounded-xl
font-bold
hover:border-yellow-400
transition
"

>

LinkedIn

</a>



</div>








{/* STATS */}


<div className="
grid
grid-cols-3
gap-4
mt-12
max-w-lg
">



<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
text-center
">

<h3 className="
text-3xl
font-bold
text-yellow-400
">

6+

</h3>

<p className="text-sm text-slate-300">
Projects
</p>

</div>




<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
text-center
">

<h3 className="
text-3xl
font-bold
text-yellow-400
">

10+

</h3>

<p className="text-sm text-slate-300">
Models
</p>

</div>





<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
text-center
">

<h3 className="
text-xl
font-bold
text-yellow-400
">

Python

</h3>

<p className="text-sm text-slate-300">
Main Stack
</p>

</div>



</div>





</motion.div>








{/* IMAGE */}


<motion.div


initial={{
opacity:0,
scale:0.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
flex
justify-center
"


>


<div className="relative">





<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
absolute
-top-8
-left-8
bg-white/10
backdrop-blur-xl
border
border-white/20
px-5
py-3
rounded-xl
text-yellow-400
"

>

🐍 Python

</motion.div>






<motion.div

animate={{
y:[0,20,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
absolute
-bottom-8
-right-8
bg-white/10
backdrop-blur-xl
border
border-white/20
px-5
py-3
rounded-xl
text-yellow-400
"

>

🤖 Machine Learning

</motion.div>






<div className="
absolute
inset-0
bg-yellow-400
blur-[80px]
opacity-20
rounded-full
"/>






<img

src="/me.jpeg"

alt="Mohamed Abdelhay"

className="
relative
w-80
h-80
object-cover
rounded-full
border-4
border-yellow-400
shadow-2xl
"

/>




</div>



</motion.div>






</div>


</section>





<About />

<Experience />

<Achievements />

<Skills />

<Projects />

<Contact />

<Footer />



</div>


</main>


);

}