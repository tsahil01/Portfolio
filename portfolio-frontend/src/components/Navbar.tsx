"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Contact } from "./Contact";

export function Navbar(){
    const router = useRouter();
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return <>
    <div className="p-2 rounded-xl bg-zinc-800 flex flex-row gap-2 drop-shadow-xl justify-center mx-auto">
        <a href="https://github.com/tsahil01" target="_blank">
            <div className="font-bold md:p-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 text-xs md:text-md">@tsahil01</div>
        </a>
        <button className="rounded-lg md:p-2 p-1 py-1 hover:bg-zinc-900 text-xs md:text-md font-bold" onClick={()=>router.push('/')}>Home</button>
        <button className="rounded-lg md:p-2 p-1 py-1 hover:bg-zinc-900 text-xs md:text-md font-bold" onClick={()=>router.push('/projects')}>Projects</button>
        <button className="rounded-lg md:p-2 p-1 py-1 hover:bg-zinc-900 text-xs md:text-md font-bold"
        onClick={toggleChat}
        >Contact</button>
        <button className="rounded-lg md:p-2 p-1 py-1 hover:bg-zinc-900 text-xs md:text-md font-bold" onClick={()=>{window.open("https://docs.google.com/document/d/1KzpBTrTm0qQoNl8qvTCcK41wSoqk6aIQ4hHEO8pZ6TM/edit?usp=sharing")}}>Resume</button>
    </div>
    {showChat && <Contact />}
    </>
}
