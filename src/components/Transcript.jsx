import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

import Particles from "react-tsparticles";

import {
ResponsiveContainer,
PieChart,
Pie,
Cell,
Tooltip
} from "recharts";

export default function Transcript(){

const [filter,setFilter]=useState("All");

const semesters=[

{
title:"1ST SEMESTER 2024",
key:"1ST-2024",
gpa:"2.35",
courses:[
{code:"03523106",name:"Computer Programming",credit:2,grade:"D",skill:"Programming"},
{code:"03523108",name:"Computer Programming Lab",credit:1,grade:"D",skill:"Programming"},
{code:"03523206",name:"Electronics Technology",credit:1,grade:"A",skill:"Electronics"},
{code:"03523208",name:"Electronics Technology Lab",credit:1,grade:"A",skill:"Electronics"},
{code:"03523501",name:"Database & Data Technology",credit:2,grade:"D+",skill:"Database"},
{code:"03523600",name:"Database & Data Tech Lab",credit:1,grade:"B",skill:"Database"},
{code:"03923152",name:"Comm Eng & Report Writing",credit:3,grade:"C",skill:"Communication"},
{code:"03943111",name:"Differential Equations",credit:3,grade:"C",skill:"Mathematics"},
{code:"03953103",name:"Entrepreneurship",credit:3,grade:"B",skill:"Business"}
]
},

{
title:"2ND SEMESTER 2024",
key:"2ND-2024",
gpa:"1.63",
courses:[
{code:"03523107",name:"Microcontroller System",credit:2,grade:"C",skill:"Embedded"},
{code:"03523118",name:"Object Oriented Programming",credit:2,grade:"D",skill:"OOP"},
{code:"03523124",name:"Web Application Development",credit:2,grade:"F",skill:"Web"},
{code:"03523126",name:"Linux OS & Admin",credit:2,grade:"D",skill:"Linux"},
{code:"03523120",name:"Microcontroller System Lab",credit:1,grade:"D",skill:"Embedded"},
{code:"03523122",name:"Object Oriented Program Lab",credit:1,grade:"D",skill:"OOP"},
{code:"03523126",name:"Web App Development Lab",credit:1,grade:"F",skill:"Web"},
{code:"03523128",name:"Linux OS & Admin Lab",credit:1,grade:"D",skill:"Linux"},
{code:"03943112",name:"Matrices & Vector Analysis",credit:3,grade:"A",skill:"Mathematics"},
{code:"03803701",name:"Design Thinking",credit:3,grade:"A",skill:"Design"}
]
},

{
title:"1ST SEMESTER 2025",
key:"1ST-2025",
gpa:"2.77",
courses:[
{code:"03523107",name:"Microcontroller System",credit:2,grade:"C",skill:"Embedded"},
{code:"03523118",name:"Object Oriented Programming",credit:2,grade:"D",skill:"OOP"},
{code:"03523124",name:"Web Application Development",credit:2,grade:"F",skill:"Web"},
{code:"03523126",name:"Linux Operating System & Admin",credit:2,grade:"D",skill:"Linux"},
{code:"03523120",name:"Microcontroller System Lab",credit:1,grade:"D",skill:"Embedded"},
{code:"03523122",name:"Object Oriented Program Lab",credit:1,grade:"D",skill:"OOP"},
{code:"03523126",name:"Web App Development Lab",credit:1,grade:"F",skill:"Web"},
{code:"03523128",name:"Linux OS & Admin Lab",credit:1,grade:"D",skill:"Linux"},
{code:"03943112",name:"Matrices & Vector Analysis",credit:3,grade:"A",skill:"Mathematics"},
{code:"03803701",name:"Design Thinking",credit:3,grade:"A",skill:"Design"}
]
}

];

const gradeColor=(g)=>{
if(g==="A") return "#00ff9d";
if(g==="B") return "#4fc3f7";
if(g==="C") return "#ffc107";
if(g==="D") return "#ff7043";
if(g==="F") return "#ff1744";
return "#d4af37";
};

const gradeStats=[
{name:"A",value:6},
{name:"B",value:4},
{name:"C",value:3},
{name:"D",value:7},
{name:"F",value:2}
];

const skills=[
"React",
"JavaScript",
"SQL",
"Linux",
"OOP",
"Embedded Systems",
"Computer Vision",
"Web Development"
];

const filtered=
filter==="All"
?semesters
:semesters.filter(s=>s.key===filter);

return(

<Element name="Transcript">

<section
style={{
background:"#000",
color:"#fff",
padding:"120px 0",
position:"relative"
}}
>

{/* PARTICLES BACKGROUND */}

<Particles
options={{
particles:{
number:{value:40},
size:{value:2},
move:{speed:0.3},
color:{value:"#d4af37"}
}
}}
/>

<Container style={{maxWidth:"1150px",position:"relative"}}>

{/* HERO */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
>

<h1 style={{fontSize:"70px",fontWeight:"900"}}>
Academic <span style={{color:"#d4af37"}}>Transcript</span>
</h1>

<p style={{color:"#888"}}>
KMUTNB | Electronics Computer Engineering
</p>

</motion.div>

{/* DASHBOARD LAYOUT */}

<div
style={{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"20px",
marginTop:"40px"
}}
>

{/* LEFT : CHART */}

<div
style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,0.1)"
}}
>

<div style={{height:"260px",display:"flex",justifyContent:"center"}}>

<ResponsiveContainer width="100%" height="100%">
<PieChart>

<Pie
data={gradeStats}
dataKey="value"
innerRadius={70}
outerRadius={100}
paddingAngle={5}
>

{gradeStats.map((g,i)=>(
<Cell key={i} fill={gradeColor(g.name)}/>
))}

</Pie>

<Tooltip/>

</PieChart>
</ResponsiveContainer>

</div>

</div>


{/* RIGHT : STATS */}

<div
style={{
display:"flex",
flexDirection:"column",
gap:"15px"
}}
>

{/* STATS ROW */}

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
gap:"15px"
}}
>

{/* GPAX */}

<div style={{
background:"rgba(255,255,255,0.05)",
padding:"18px",
borderRadius:"12px",
border:"1px solid rgba(255,255,255,0.1)"
}}>
<p style={{color:"#aaa"}}>GPAX</p>
<h3>2.29</h3>
</div>

{/* CREDITS */}

<div style={{
background:"rgba(255,255,255,0.05)",
padding:"18px",
borderRadius:"12px",
border:"1px solid rgba(255,255,255,0.1)"
}}>
<p style={{color:"#aaa"}}>Credits</p>
<h3>61</h3>
</div>

{/* SEMESTERS */}

<div style={{
background:"rgba(255,255,255,0.05)",
padding:"18px",
borderRadius:"12px",
border:"1px solid rgba(255,255,255,0.1)"
}}>
<p style={{color:"#aaa"}}>Semesters</p>
<h3>3</h3>
</div>

</div>


{/* DOWNLOAD BUTTON */}

<a
href="/Transcript.pdf"
download
style={{textDecoration:"none"}}
>

<motion.div
whileHover={{
scale:1.05,
boxShadow:"0 10px 30px rgba(212,175,55,0.4)"
}}
style={{
background:"#d4af37",
color:"#000",
padding:"18px",
borderRadius:"12px",
textAlign:"center",
fontWeight:"600",
marginTop:"5px"
}}
>

<Icon icon="mdi:download"/> Download Transcript

</motion.div>

</a>

</div>

</div>

{/* SEMESTER FILTER */}

<div style={{marginTop:"50px"}}>

<h3>Semester Filter</h3>

<div style={{
display:"flex",
gap:"10px",
marginTop:"15px"
}}>

{["All","1ST-2024","2ND-2024","1ST-2025"].map((f,i)=>(

<motion.button
key={i}
onClick={()=>setFilter(f)}
whileHover={{scale:1.05}}
style={{
background:filter===f?"#d4af37":"#111",
color:filter===f?"#000":"#fff",
border:"1px solid #333",
padding:"8px 16px",
borderRadius:"10px",
cursor:"pointer"
}}
>

{f}

</motion.button>

))}

</div>

</div>


{/* TIMELINE */}

<div style={{marginTop:"50px"}}>

<h3>Semester Timeline</h3>

<div style={{
borderLeft:"2px solid #d4af37",
paddingLeft:"20px",
marginTop:"30px"
}}>

{filtered.map((sem,i)=>(

<motion.div
key={i}
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
style={{marginBottom:"40px"}}
>

<h4>{sem.title}</h4>

<div style={{
color:"#d4af37",
marginBottom:"15px"
}}>
GPA {sem.gpa}
</div>

{sem.courses.map((c,j)=>(

<motion.div
key={j}
whileHover={{
scale:1.02,
boxShadow:"0 0 20px rgba(212,175,55,0.2)"
}}
style={{
display:"grid",
gridTemplateColumns:"140px 1fr 80px 80px",
background:"#0f0f0f",
padding:"16px",
borderRadius:"12px",
border:"1px solid #222",
marginBottom:"10px"
}}
>

<div style={{color:"#777"}}>{c.code}</div>

<div>{c.name}</div>

<div style={{textAlign:"center"}}>
{c.credit}
</div>

<div style={{
color:gradeColor(c.grade),
fontWeight:"700",
textAlign:"center"
}}>
{c.grade}
</div>

</motion.div>

))}

</motion.div>

))}

</div>

</div>

{/* SKILLS */}

<div style={{marginTop:"50px"}}>

<h3 style={{marginBottom:"20px"}}>
<Icon icon="mdi:lightning-bolt-outline" style={{marginRight:"8px"}}/>
Skills From Coursework
</h3>

<div
style={{
display:"flex",
flexWrap:"wrap",
gap:"14px",
justifyContent:"center"
}}
>

{skills.map((s,i)=>{

const iconMap={
React:"logos:react",
JavaScript:"logos:javascript",
SQL:"vscode-icons:file-type-sql",
Linux:"logos:linux-tux",
OOP:"mdi:shape-outline",
"Embedded Systems":"mdi:chip",
"Computer Vision":"mdi:eye-outline",
"Web Development":"mdi:web"
};

return(

<motion.div
key={i}
whileHover={{
scale:1.08,
boxShadow:"0 0 18px rgba(212,175,55,0.35)"
}}
transition={{type:"spring",stiffness:300}}
style={{
display:"flex",
alignItems:"center",
gap:"8px",
background:"linear-gradient(145deg,#0f0f0f,#141414)",
border:"1px solid #2a2a2a",
padding:"9px 16px",
borderRadius:"20px",
fontSize:"14px",
cursor:"default"
}}
>

<Icon icon={iconMap[s]} width="16"/>

{s}

</motion.div>

)

})}

</div>

</div>

</Container>

</section>

</Element>

)
}