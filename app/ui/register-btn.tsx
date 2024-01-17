'use client'

import { ArrowRightIcon } from 'lucide-react';
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button } from './button';

export default function RegisterBtn() {
    const { pending } = useFormStatus();
    return (
        <Button className="mt-4 w-full bg-primary text-background font-semibold" aria-disabled={pending}>
            Register <ArrowRightIcon className="ml-auto h-5 w-5" />
        </Button>
    );
}
