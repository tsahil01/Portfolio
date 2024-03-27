"use client";

import { useState } from 'react';
import { Contact } from './Contact';

export function Chat() {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <>
            <div className="fixed right-4 md:right-10 bottom-5 flex flex-col items-end z-[99999]">
                <button 
                    className="bg-zinc-950 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
                    onClick={toggleChat}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-zinc-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                    </svg>
                </button>
            </div>
            {showChat && <Contact />}
        </>
    );
}

