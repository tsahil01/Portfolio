"use server";

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

interface ContactInterface{
    email: string
    query: string
}

export async function sendMsg(contactDetails: ContactInterface) {
    try {
        const contact = await client.feedback.create({
            data: {
                email: contactDetails.email,
                query: contactDetails.query
            }
        });
        console.log(contact);
        return "success"
    } catch(e){
        console.log(e);
        return "error"
    }
}