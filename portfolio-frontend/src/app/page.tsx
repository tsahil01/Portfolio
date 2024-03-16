import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";

let mySkills = [
  {
    field: "Frontend",
    skill: ["NextJS", "ReactJS", "CSS", "HTML", "JS/TS", "NodeJS" ]
  },
  {
    field: "Backend",
    skill: ["NodeJS", "Express", "Hono"]
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
  </div>
  </>
}