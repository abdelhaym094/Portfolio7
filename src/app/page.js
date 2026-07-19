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


export default function Home(){


return (

<main
className="
min-h-screen
text-white
overflow-hidden
relative
bg-[#020617]
">


{/* Background */}

<div
className="
absolute
inset-0
bg-gradient-to-br
from-[#020617]
via-[#111827]
to-black
"
/>



<div
className="
absolute
top-10
left-0
w-72
h-72
bg-yellow-400/20
blur-[120px]
rounded-full
"
/>



<div
className="
absolute
bottom-0
right-0
w-72
h-72
bg-blue-500/20
blur-[120px]
rounded-full
"
/>




<ParticlesBackground />



<div
className="
relative
z-10
">


<Navbar />





<section
className="
min-h-screen
flex
items-center
px-5
pt-28
pb-16
"
>


<div
className="
max-w-6xl
mx-auto
w-full
flex
flex-col
md:grid
md:grid-cols-2
gap-12
items-center
"
>



{/* TEXT */}

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>



<div
className="
inline-flex
bg-yellow-400/10
border
border-yellow-400/30
px-4
py-2
rounded-full
text-yellow-400
text-sm
mb-5
"
>

🚀 Data Science & AI Enthusiast

</div>





<h1
className="
text-4xl
sm:text-5xl
md:text-7xl
font-extrabold
leading-tight
"
>

Mohamed

<span
className="
text-yellow-400
"
>

 Abdelhay

</span>

</h1>





<h2
className="
text-2xl
sm:text-3xl
mt-5
font-semibold
"
>

<TypingText/>

</h2>






<p
className="
mt-6
text-slate-300
leading-relaxed
text-base
sm:text-lg
"
>

I build intelligent solutions using Machine Learning,
Artificial Intelligence and Data Analytics.

I transform raw data into meaningful insights
through predictive models and interactive dashboards.

</p>







<div
className="
flex
flex-wrap
gap-3
mt-7
"
>


<a
href="#projects"
className="
bg-yellow-400
text-black
px-6
py-3
rounded-xl
font-bold
"
>

Projects

</a>



<a
href="https://github.com/abdelhaym953-create"
target="_blank"
className="
border
border-yellow-400
px-6
py-3
rounded-xl
font-bold
"
>

Github

</a>



<a
href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
target="_blank"
className="
border
border-white/20
px-6
py-3
rounded-xl
font-bold
"
>

LinkedIn

</a>



</div>








<div
className="
grid
grid-cols-3
gap-3
mt-10
"
>


<div
className="
glass
rounded-2xl
p-4
text-center
"
>

<h3
className="
text-2xl
font-bold
text-yellow-400
"
>

6+

</h3>

<p
className="
text-xs
text-slate-300
"
>
Projects
</p>

</div>




<div
className="
glass
rounded-2xl
p-4
text-center
"
>

<h3
className="
text-2xl
font-bold
text-yellow-400
"
>

10+

</h3>

<p
className="
text-xs
text-slate-300
"
>
Models
</p>

</div>




<div
className="
glass
rounded-2xl
p-4
text-center
"
>

<h3
className="
text-lg
font-bold
text-yellow-400
"
>

Python

</h3>

<p
className="
text-xs
text-slate-300
"
>
Stack
</p>

</div>



</div>



</motion.div>









{/* IMAGE */}

<motion.div

initial={{
opacity:0,
scale:0.8
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
order-first
md:order-last
"

>


<div
className="
relative
"
>


<div
className="
absolute
inset-0
bg-yellow-400
blur-[70px]
opacity-20
rounded-full
"
/>



<img

src="/me.jpeg"

alt="Mohamed Abdelhay"

className="
relative
w-56
h-56
sm:w-72
sm:h-72
md:w-80
md:h-80
rounded-full
object-cover
border-4
border-yellow-400
shadow-2xl
"

/>


</div>



</motion.div>



</div>


</section>






<About/>

<Experience/>

<Achievements/>

<Skills/>

<Projects/>

<Contact/>

<Footer/>


</div>


</main>


);

}