'use client'

import AvatarDemo from "@/components/AvatarDemo";
import Sidenav from "./Sidenav";
import { Cross, CrossIcon, Menu, X } from "lucide-react";
import { Metadata } from "next";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isOpened, setIsOpened] = useState(false)
    const handleIsOpened = () => {
        setIsOpened(!isOpened)
    }
    return (
        <div className="h-screen flex">
            <Sidenav isOpened={isOpened} setIsOpened={handleIsOpened} />
            <div className="flex-1 md:ml-64">
                <div className="border-b border-b-secondary bg-background py-4 px-8 sticky top-0 z-30">
                    <h1 className='font-semibold rounded-md flex items-center justify-between md:justify-end gap-3'>
                        <button className="block md:hidden" onClick={() => setIsOpened(!isOpened)}>
                            {
                                isOpened ? <X></X> : <Menu></Menu>
                            }
                        </button>
                        <AvatarDemo />
                    </h1>
                </div>
                <main className="p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}