import AvatarDemo from "@/components/AvatarDemo";
import Sidenav from "./Sidenav";
import { Menu } from "lucide-react";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex">
            <Sidenav />
            <div className="flex-1 md:ml-64">
                <div className="border-b border-b-secondary bg-background py-4 px-8 sticky top-0 z-30">
                    <h1 className='font-semibold rounded-md flex items-center justify-between md:justify-end gap-3'>
                        <button className="block md:hidden">
                            <Menu></Menu>
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