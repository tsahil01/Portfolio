import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";

let mySkills = [
  {
    field: "Frontend",
    skill: ["React.Js", "Next.Js", "JS/TS", "Tailwind", "CSS", "HTML"]
  },
  {
    field: "Backend",
    skill: ["NodeJS", "Express", "Hono", "JS/TS"]
  },
  {
    field: "Databases",
    skill : ["PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    field: "Frontend",
    skill: ["React.Js", "Next.Js", "JS/TS", "Tailwind", "CSS", "HTML"]
  },
  {
    field: "Backend",
    skill: ["NodeJS", "Express", "Hono", "JS/TS"]
  },
  {
    field: "Databases",
    skill : ["PostgreSQL", "MongoDB", "Prisma"]
  }
  ]

let myProjects = [
  {
    projectName: "Real Time Chat Application",
    projectDescription: "A Chat application made using nextjs.",
    projectImgUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sUrmVEH3GzIRdgPCOMQ7lw.png",
    projectUrl: "https://stackoverflow.com/questions/76374440/how-to-pass-an-array-of-objects-in-typescript-nextjs-with-interfaces-intrinsicat"
  },
  {
    projectName: "Real Time Chat Application",
    projectDescription: "A Chat application made using nextjs.",
    projectImgUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sUrmVEH3GzIRdgPCOMQ7lw.png"
  },
  {
    projectName: "Real Time Chat Application",
    projectDescription: "A Chat application made using nextjs.",
    projectImgUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sUrmVEH3GzIRdgPCOMQ7lw.png"
  }
]

export default function(){
  return <>
  <div className="flex flex-col gap-5 p-5 justify-center md:w-2/3 w-screen mx-auto">
    <Navbar />
    <div className="flex flex-col md:mt-20 mt-16">
      <Header/>
    </div>
    <div className="mt-20">
      <Skills data={mySkills}/>
    </div>
    <div className="mt-10">
      <Projects projects={myProjects}/>
    </div>
  </div>
  </>
}