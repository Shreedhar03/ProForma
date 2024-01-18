import Image from 'next/image'
import { fetchCustomers } from '../../../lib/data'
import React from 'react'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export default async function page() {
    const customers = await fetchCustomers()
    console.log("customers", customers)
    return (
        <section className='flex flex-col'>
            <h2 className='text-2xl'>Customers</h2>
            <Link
                href="/dashboard/customers/create"
                className="mt-2 flex py-1 items-center rounded-lg bg-primary text-background font-semibold px-3 w-[126px]"
            >
                <span className='pr-1 font-semibold'>Add new</span>
                <PlusIcon className="h-5" />
            </Link>
            <div className='flex gap-2 mt-5 flex-wrap justify-center sm:justify-start'>
                {
                    customers.map(cus => {
                        return (
                            <div key={cus.id} className='flex flex-col items-center bg-secondary p-6 rounded-md w-full sm:w-52'>
                                <Image alt='customer' src={cus.image_url} width={70} height={70} className='rounded-full' />
                                <div className='mt-3'>
                                    <p className='leading-5 font-medium text-lg text-primary text-center'>{cus.name}</p>
                                    <p className='leading-5 text-muted-foreground text-base text-center'>{cus.email}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
