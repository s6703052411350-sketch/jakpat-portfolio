import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Transcript() {

const semesters = [

{
title:"1ST SEMESTER 2024",
gpa:"2.35",
courses:[
{code:"03523106",name:"Computer Programming",credit:2,grade:"D"},
{code:"03523108",name:"Computer Programming Lab",credit:1,grade:"D"},
{code:"03523206",name:"Electronics Technology",credit:1,grade:"A"},
{code:"03523208",name:"Electronics Technology Lab",credit:1,grade:"A"},
{code:"03523501",name:"Database & Data Technology",credit:2,grade:"D+"},
{code:"03523600",name:"Database & Data Tech Lab",credit:1,grade:"B"},
{code:"03923152",name:"Comm Eng & Report Writing",credit:3,grade:"C"},
{code:"03943111",name:"Differential Equations",credit:3,grade:"C"},
{code:"03953103",name:"Entrepreneurship",credit:3,grade:"B"}
]
},

{
title:"2ND SEMESTER 2024",
gpa:"1.63",
courses:[
{code:"03523107",name:"Microcontroller System",credit:2,grade:"C"},
{code:"03523118",name:"Object Oriented Programming",credit:2,grade:"D"},
{code:"03523124",name:"Web Application Development",credit:2,grade:"F"},
{code:"03523126",name:"Linux OS & Admin",credit:2,grade:"D"},
{code:"03523120",name:"Microcontroller System Lab",credit:1,grade:"D"},
{code:"03523122",name:"Object Oriented Program Lab",credit:1,grade:"D"},
{code:"03523126",name:"Web App Development Lab",credit:1,grade:"F"},
{code:"03523128",name:"Linux OS & Admin Lab",credit:1,grade:"D"},
{code:"03943112",name:"Matrices & Vector Analysis",credit:3,grade:"A"},
{code:"03803701",name:"Design Thinking",credit:3,grade:"A"}
]
},

{
title:"1ST SEMESTER 2025",
gpa:"2.77",
courses:[
{code:"03523107",name:"Microcontroller System",credit:2,grade:"C"},
{code:"03523118",name:"Object Oriented Programming",credit:2,grade:"D"},
{code:"03523124",name:"Web Application Development",credit:2,grade:"F"},
{code:"03523126",name:"Linux Operating System & Admin",credit:2,grade:"D"},
{code:"03523120",name:"Microcontroller System Lab",credit:1,grade:"D"},
{code:"03523122",name:"Object Oriented Program Lab",credit:1,grade:"D"},
{code:"03523126",name:"Web App Development Lab",credit:1,grade:"F"},
{code:"03523128",name:"Linux OS & Admin Lab",credit:1,grade:"D"},
{code:"03943112",name:"Matrices & Vector Analysis",credit:3,grade:"A"},
{code:"03803701",name:"Design Thinking",credit:3,grade:"A"}
]
}

];


/* ANIMATION */

const fadeUp={
hidden:{opacity:0,y:50},
show:{
opacity:1,
y:0,
transition:{duration:.6}
}
}

const stagger={
hidden:{},
show:{
transition:{staggerChildren:.1}
}
}


return(

<Element name="Transcript" id="transcript">

<section
style={{
background:"#000",
color:"#fff",
padding:"80px 0 120px",
backgroundImage:"radial-gradient(#d4af3715 1px, transparent 1px)",
backgroundSize:"40px 40px"
}}
>

<Container style={{maxWidth:"1150px"}}>

{/* HEADER */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
style={{
display:"grid",
gridTemplateColumns:"1fr 420px",
gap:"20px",
alignItems:"start"
}}
>

{/* LEFT */}

<div>

<p style={{
letterSpacing:"4px",
color:"#777",
marginBottom:"10px",
fontSize:"14px"
}}>
ACADEMIC RECORD
</p>

<h1 style={{
fontSize:"70px",
fontWeight:"900",
lineHeight:"1.1"
}}>
OFFICIAL <span style={{color:"#d4af37"}}>TRANSCRIPT</span>
</h1>

<p style={{color:"#888",marginTop:"15px"}}>
KMUTNB | College of Industrial Technology
</p>

<p style={{
maxWidth:"520px",
lineHeight:"2",
color:"#bbb",
marginTop:"35px"
}}>
This section shows my academic record from King Mongkut's University of Technology North Bangkok including completed courses, credits and semester GPA.
</p>

</div>


{/* CARD */}

<motion.div
whileHover={{y:-8}}
style={{
background:"rgba(255,255,255,0.03)",
padding:"35px",
borderRadius:"20px",
border:"1px solid rgba(212,175,55,0.25)",
boxShadow:"0 10px 40px rgba(212,175,55,0.1)"
}}
>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
marginBottom:"30px"
}}>

<div style={{textAlign:"center"}}>
<p style={{color:"#bbb"}}>
<Icon icon="mdi:school" color="#d4af37"/> Current GPAX
</p>

<h2 style={{fontSize:"34px"}}>2.29</h2>
</div>

<div style={{textAlign:"center"}}>
<p style={{color:"#bbb"}}>
<Icon icon="mdi:check-circle-outline" color="#d4af37"/> Total Credits
</p>

<h2 style={{fontSize:"34px"}}>61</h2>
</div>

</div>

<a href="/Transcript.pdf" download style={{textDecoration:"none",display:"block"}}>

<motion.button
whileHover={{
scale:1.05,
background:"#ffffff"
}}
whileTap={{scale:0.95}}
style={{
width:"100%",
background:"#d4af37",
border:"1px solid #d4af37",
color:"#000",
fontWeight:"600",
padding:"14px",
borderRadius:"10px",
cursor:"pointer"
}}
>

<Icon icon="mdi:download" style={{marginRight:"8px"}} />
Download Transcript

</motion.button>

</a>

</motion.div>

</motion.div>


<hr style={{borderColor:"#111",margin:"35px 0"}}/>


{/* SEMESTERS */}

{semesters.map((sem,i)=>(

<motion.div
key={i}
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
style={{marginBottom:"70px"}}
>

<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"25px"
}}>

<h3 style={{display:"flex",alignItems:"center",gap:"10px"}}>
<Icon icon="mdi:calendar"/>
{sem.title}
</h3>

<div style={{
border:"1px solid #d4af37",
padding:"6px 18px",
borderRadius:"20px",
color:"#d4af37",
fontWeight:"600"
}}>
GPA : {sem.gpa}
</div>

</div>


<motion.div
variants={stagger}
initial="hidden"
whileInView="show"
viewport={{once:true}}
>

{sem.courses.map((c,j)=>(

<motion.div
key={j}
variants={fadeUp}
whileHover={{x:12}}
style={{
display:"grid",
gridTemplateColumns:"160px 1fr 120px 80px",
background:"#0f0f0f",
padding:"20px",
borderRadius:"14px",
border:"1px solid #222",
marginBottom:"14px",
alignItems:"center"
}}
>

<div style={{color:"#777"}}>{c.code}</div>

<div style={{fontWeight:"500"}}>{c.name}</div>

<div style={{textAlign:"center"}}>
<div style={{fontSize:"11px",color:"#666"}}>CREDITS</div>
<div>{c.credit}</div>
</div>

<div style={{
border:"1px solid #d4af37",
borderRadius:"8px",
padding:"4px 10px",
color:"#d4af37",
textAlign:"center",
fontWeight:"700"
}}>
{c.grade}
</div>

</motion.div>

))}

</motion.div>

</motion.div>

))}

</Container>

</section>

</Element>

)
}