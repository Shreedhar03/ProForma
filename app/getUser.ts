'use server'

import { getCurrentUserName } from "@/lib/actions"

export async function getUser(){
    'use server'
    console.log("getting user....")
    const user = await getCurrentUserName()
    return user
}