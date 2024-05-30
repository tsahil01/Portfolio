import { atom } from "recoil";

export const projectsAtom = atom({
    key: "projectsAtom",
    default: [
      {
        projectName: "QuickShare: Effortlessly Share Your Files Anywhere",
        projectDescription: "Simplify your file sharing experience with our intuitive platform. Seamlessly upload, share, and access your files anytime, anywhere. Start sharing smarter today!",
        projectImgUrl: "/quickShare.png",
        projectUrl: "https://ezfiles.vercel.app/"
      },
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
});
