import { Home, LogOut, Scroll, Users2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import clsx from 'clsx'
import Signout from '../signout'

const links = [
    { title: 'Home', href: '/dashboard', icon: <Home size={21}></Home> },
    { title: 'Invoices', href: '/dashboard/invoices', icon: <Scroll size={21}></Scroll> },
    { title: 'Customers', href: '/dashboard/customers', icon: <Users2 size={21}></Users2> },
]
export default function Sidenav({ isOpened }: { isOpened: boolean }) {
    // const pathname = usePathname()
    return (
        <>
            <nav className={`h-screen flex flex-col justify-between fixed left-0 top-0 py-4 px-6 bg-background z-30
            ${isOpened ? '-translate-x-0' : '-translate-x-[300px]'}  transition-transform md:translate-x-0 md:w-64 border-r border-r-secondary`}>
                <section className='flex flex-col gap-10'>

                    <Link href={'/dashboard'} className="logo text-2xl border-b-[3px] border-b-primary text-left">BillWise<span className="text-primary text-4xl font-semibold">.</span></Link>

                    <div className='text-xl flex flex-col gap-4 w-full md:w-4/5'>
                        {
                            links.map((link, key) => {
                                return <Link href={link.href} key={key} className={
                                    clsx('flex items-center gap-3 text-base hover:bg-accent p-3 transition-all rounded-lg', {
                                        'bg-accent': "pathname" === link.href
                                    })
                                }>{link.icon}{link.title}</Link>
                            })
                        }
                    </div>
                </section>
                <form
                    action={Signout}>
                    <button className='flex items-center gap-1 text-base hover:bg-accent p-2 self-start transition-all rounded-lg'><LogOut size={20}></LogOut>Sign Out</button>
                </form>
            </nav>

        </>
    )
}
