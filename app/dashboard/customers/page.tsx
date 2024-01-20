import Image from 'next/image'
import { fetchCustomers } from '../../../lib/data'
import React from 'react'
import { PlusIcon, Trash2 } from 'lucide-react'
import Link from 'next/link'
import DeleteCustomerBtn from '@/app/ui/customers/delete-btn'

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
                    customers.length===0 && <h2>No Customers found</h2>
                }
                {
                    customers.map(cus => {
                        return (
                            <div key={cus.id} className='flex flex-col items-center relative bg-secondary p-6 rounded-md w-full sm:w-52'>
                                <Image alt='customer' src={cus.image_url} width={70} height={70} className='rounded-full' />
                                <div className='mt-3'>
                                    <p className='leading-5 font-semibold text-lg text-primary text-center'>{cus.name}</p>
                                    <p className='leading-5 text-muted-foreground text-sm text-center mt-1'>{cus.email}</p>
                                </div>
                                <DeleteCustomerBtn customerID={cus.id} customerName={cus.name} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

