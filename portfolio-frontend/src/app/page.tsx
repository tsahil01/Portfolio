import { Header } from "@/components/Header";
import Projects from "@/components/AllProjects";
import { Skills } from "@/components/Skills";
import { Socials } from "@/components/Socials";
import { GithubGraph } from "@/components/ui/github";

let mySkills = [
  {
    field: "Backend",
    skill: ["Node js", "Express js", "Hono", "JS/ TS", "Next auth"]
  },
  {
    field: "Frontend",
    skill: ["React js", "Next js", "Recoil", "JS/ TS", "Tailwind", "CSS/ HTML"]
  },
  {
    field: "Database",
    skill: ["PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    field: "Devops",
    skill: ["Docker", "Azure", "Aws", "Git"]
  }
]

let myProjects = [
  {
    projectName: "Eznote: Markdown Writer App",
    projectDescription: "A ReactJS-based tool for real-time Markdown editing and previewing. With a split-screen layout and user-friendly interface, effortlessly create and format Markdown content. ",
    projectImgUrl: "https://pbs.twimg.com/media/GHhjZhrbkAMCJ0o?format=jpg&name=large",
    projectUrl: "https://eznote.vercel.app/"
  },
  {
    projectName: "Paytm Clone (Payment App)",
    projectDescription: "The Payment App is a full-stack web application which demonstrate streamline user registration, authentication, and money transfer processes. Built with a Node.js backend using Express, MongoDB for data storage, and a React frontend, the app provides a secure and efficient platform for financial transactions.",
    projectImgUrl: "https://pbs.twimg.com/media/GEtRaK6akAAHZ54?format=png&name=large",
    projectUrl: "https://github.com/tsahil01/Paytm-Clone"
  },
  {
    projectName: "Async-Await Simplified: A JavaScript MongoDB Example",
    projectDescription: "My First Blog on Medium, explaining Async-Await in Javascript using a MongoDB example",
    projectImgUrl: "",
    projectUrl: "https://medium.com/@sahiltiwaskar2003/async-await-simplified-a-javascript-mongodb-example-b802abadb1a8"
  }
]

let mySocials = ["https://github.com/tsahil01/", "https://twitter.com/t__sahil/", "https://www.linkedin.com/in/sahil-tiwaskar/"]

export default function App() {
  return <>
    <div className="flex flex-col md:mt-20 mt-16 overflow-hidden p-5">
      <Header />
    </div>
    <div className="my-10">
      <Socials socials={mySocials} />
    </div>
      <div className="mx-auto md:m-5 justify-center flex ">
        <div className="rounded-2xl bg-slate-950 p-3">
          <GithubGraph
            username="tsahil01"
            blockMargin={4}
            colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
          />
        </div>
      </div>
    <div className="md:mt-20 mt-10 overflow-hidden">
      <Projects />
    </div>
    <div className="mt-20 overflow-hidden">
      <Skills data={mySkills} />
    </div>
  </>
}