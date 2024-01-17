'use client'

import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { registerUser } from '@/lib/actions';
import RegisterBtn from './register-btn';
import { CheckCircle2Icon, User2Icon } from 'lucide-react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const router = useRouter()

    const [errorMessage, dispatch] = useFormState(registerUser, undefined);
    if (errorMessage?.includes("success")) {
        setTimeout(() => {
            router.replace('/login')
        }, 1000);
    }
    return (
        <form action={dispatch}>
            <div className="flex-1 rounded-lg bg-secondary px-6 pb-4 pt-8">
                <h1 className={`mb-3 text-2xl text-center`}>
                    Create a new account
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="email"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <input
                                autoComplete='off'
                                className="peer focus:outline-none block w-full rounded-md border bg-muted py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                required
                            />
                            <User2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer focus:outline-none block w-full rounded-md border bg-muted py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                autoComplete='off'
                                className="peer focus:outline-none block w-full rounded-md border bg-muted py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="password"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                autoComplete='off'
                                className="peer focus:outline-none block w-full rounded-md border bg-muted py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Re-enter password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                </div>
                <RegisterBtn />

                <div className="flex h-8 items-end space-x-1">
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true">
                        {errorMessage && (
                            <>
                                {
                                    errorMessage.includes("success") ? <CheckCircle2Icon className="h-5 w-5 text-green-500" /> : <ExclamationCircleIcon className="h-5 w-5 text-red-500" />}
                                <p className={`text-sm ${errorMessage.includes("success") ? 'text-green-500' : 'text-red-500'}`}>{errorMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}
