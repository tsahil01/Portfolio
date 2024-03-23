import { VscGithub } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export function Socials({socials}: { socials: string[] }) {
    return <>
    <div className="flex flex-col gap-1">
    <div className="my-auto mx-auto text-sm text-zinc-600">
        My socials: 
    </div>
    <div className="rounded-xl flex flex-row gap-1 ustify-center mx-auto my-auto">
        <a className="rounded-full hover:bg-zinc-800 p-3" href={socials[0]} target="_blank">
            <VscGithub size={25}/>
        </a>
        <a className="rounded-full hover:bg-zinc-800 p-3" href={socials[1]} target="_blank">
            <BsTwitterX size={25}/>
        </a>
        <a className="rounded-full hover:bg-zinc-800 p-3" href={socials[2]} target="_blank">
            <FaLinkedin size={25}/>
        </a>
        
    </div>
    </div>
    </>
}
