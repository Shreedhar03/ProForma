'use server'

import { deleteCustomer } from "@/lib/actions";


export default async function DeleteCustomer(id:string) {
        "use server";
        console.log("SA called")
        await deleteCustomer(id)
}
