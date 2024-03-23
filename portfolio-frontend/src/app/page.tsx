import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Socials } from "@/components/Socials";

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
    skill : ["PostgreSQL", "MongoDB", "Prisma"]
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
    projectImgUrl: "https://lh3.googleusercontent.com/fife/ALs6j_GsN5-kvrEje8mXRcXKhj1T3d_2Z_BhwesJle4EEmbqemh478AY1uQrxDc1sNuwVMTDSDtjz-Xey0UEbf3rlh2_FLzlTvrXGDXkf1oMAGA0ONtOHATZslf5hO3hP3_QB0Am_1gSmaqoJZEcUpTJedc_AvmC-QOzV7GHoUj77cjPfNi0r5sPla1EfpN5uObDSiNqsdJ7rgiIpUIrDDopfCwPhS_yZWHNR7uhEMhQFnIHOzoaz2q_H5Tg1AVebiEqb1jKPlNhr9YUn9lvAguxI_G1W7uXj7MFVNRC8hIUiR9TatC4wE1L8Lk_NqCtPiriZfUJXd2qta2K3JnGJ3g8RmH3oDAizT40boXTC6XL744iPB2XOKQH-1chLfCkHOo5CvurwRDm_mpDwwCbkltnL-hG3OQjzkm7Ob3cYHkUE5perWja1oeUwfwhKyUHs3CThIVAD0EpNVg-McVwUAs7fBlvASDuwF5J0EDeCeLbtTnbD7dhT_ndUhxSkon8Ui_Eii6QHpzlThhkM2I2rcqET2kr0KOUh-MKzeBkUGY5nXbm5Wo9JihaocnJRa-sbsdT6vdFAt3yhRMUAvtV16B63dClDo3cUKe93iwr4bXD_NwB6_GPNPsIKHwzvAEpHyBXnS7osKtm8mwDMAKiAAOIapwOKGK-b_eNMyFT6LN7SvaEbR5pLkGnhlsF6xtCZI1-86U5GkjSH918nqcX_zWXrbO-UjvoFzdRELW41GcbiWGhXNFFEXDyt6AS7CxWK6-RgjOyOADBWnQwu5KJg5SaYTnQtpbxp1ReIuQleCUySYEGv61A0Ay19t3vSSvDvntDA4N3eg5_c9cCYHGleyIvw0tQ819hNhWBCM2YOZiwtE53vc9a9nDgaZoFtak-Z-7p5KLVbnoxxjB8hn0CH2lrqb7K2UMpX_wWllak9eJOVToir5080Gc6tMnAZC2KPzrRw_6qp59vRih6GMTXy73-PlDnjDQEJTAfEZ-3Qn3aryAk5NEMrttWzg4Xr8iCCspXIZRSo1JtymVZMKSdbAWdyqkkLCVm19I22sRZt8KyJ6fmAg-mUt49NLCWszZCOT7j2qmP3RvHrWYbcqx7UvKQib8TPCbcZzQtvsEn7n4IaZ0TYp4yLL-B5Xc9cPoagevLyRgPKoXufj7AuDuCrodK2KbDDt_GhCRyogUgZ5K505x-3W_oG6WhNcO6IwkaFs15Dxd7Wq8BSoQaZ8OaY-HKGhyx9SXdR4u8wax4m9ZEFQbAoJqbVe5lQgQmXVPAo_bwkXz-XEmA6Iw0H8efDgx4RqGKEnAZl6OvIOjNMVOljPRKsmsbzdMQm5pZrDjzs30vxkv3Wbx5V9snY3ZlfvDNaHI3hdGjpWxaKm6isxmiusYns90u8cku5bsvGfhDSoPSDNqRsrnhkotjbpuRWDWMzYJypA_AGWZpst9MjptcpMSdNbby7rMIB6JI1xAoMQ-h6JjbigeEuIsx6ZwIQYja7Cl5P45bwLV5haFVHtPwj5CajFBEucMDshTR3lKI0tNmgwV5muT_Ad6SO6qoHp42t-XBbU7kn7aqaziC8dv-UQwb5NMylwKhoPwvbOjFXFKR0Q0Sq935YPJ4Rdc=w1920-h1080",
    projectUrl: "https://medium.com/@sahiltiwaskar2003/async-await-simplified-a-javascript-mongodb-example-b802abadb1a8"
  }
]

let mySocials = ["https://github.com/tsahil01/", "https://twitter.com/t__sahil/", "https://www.linkedin.com/in/sahil-tiwaskar/"]

export default function(){
  return <>
  <div className="flex flex-col gap-5 p-5 justify-center md:w-2/3 w-screen mx-auto overflow-hidden">
    <Navbar />
    <div className="flex flex-col md:mt-20 mt-16 overflow-hidden">
      <Header/>
    </div>
    <div className="my-10">
      <Socials socials = {mySocials}/>
    </div>
    <div className="md:mt-20 mt-10 overflow-hidden">
      <Projects projects={myProjects}/>
    </div>
    <div className="mt-20 overflow-hidden">
      <Skills data={mySkills}/>
    </div>
  </div>
  </>
}