import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export default function(){
  return <>
  <div className="flex flex-col gap-5 p-5 justify-center md:w-2/3 w-full mx-auto">
    <Navbar />
    <div className="flex flex-col md:mt-20 mt-16">
      <Header/>
    </div>
  </div>
  </>
}