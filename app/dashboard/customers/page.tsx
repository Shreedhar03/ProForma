import Image from 'next/image'
import { fetchCustomers } from '../../../lib/data'
import React from 'react'

export default async function page() {
    const customers = await fetchCustomers()
    console.log("customers", customers)
    return (
        <section className='flex flex-col gap-4'>
            <h2 className='text-xl'>Customers</h2>
            <div className='flex gap-2 flex-wrap justify-center sm:justify-start'>
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
