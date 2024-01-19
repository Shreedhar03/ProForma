'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitBtn({text}:{text:string}) {
    const { pending } = useFormStatus()
    return (
        <div>
            <Button type="submit" className={`bg-green-600 text-background hover:bg-green-700 font-medium ${pending && 'cursor-not-allowed'}`} disabled={pending}>{text}</Button>
        </div>
    )
}
