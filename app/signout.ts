'use server'

import { signOut } from '@/auth'

export default async function Signout() {
        "use server";
        await signOut()
}
