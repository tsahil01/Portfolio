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
            <div className="font-bold md:p-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">@tsahil01</div>
        </a>
        <button className="rounded-lg p-2 py-1 hover:bg-zinc-900 text-sm sm:text-md font-bold" onClick={()=>router.push('/projects')}>Projects</button>
        <button className="rounded-lg p-2 py-1 hover:bg-zinc-900 text-sm sm:text-md font-bold"
        onClick={toggleChat}
        >Contact</button>
        <button className="rounded-lg p-2 py-1 hover:bg-zinc-900 text-sm sm:text-md font-bold" onClick={()=>{window.open("https://docs.google.com/document/d/14kn9LgLzVbkC4kCwDobLUjXMyT58U1w5CavVtNQ51UM/edit?usp=sharing")}}>Resume</button>
    </div>
    {showChat && <Contact />}
    </>
}