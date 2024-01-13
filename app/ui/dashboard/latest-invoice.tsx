import Image from 'next/image';
import React from 'react'

interface Invoice {
    amount: string;
    name: string;
    image_url: string;
    email: string;
    id: string;
}

export default function LatestINvoices({ invoices }: { invoices: Invoice[] }) {

    return (
        <div className='flex flex-col gap-8'>
            <h2>Latest Invoices</h2>
            <section className='w-9/12 flex flex-col gap-3'>
                {
                    invoices.map(inv => {
                        return (
                            <div key={inv.id} className='flex justify-between bg-muted py-2 px-3 rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <Image alt='user' width={44} height={44} className='rounded-full object-cover' src={inv.image_url} />
                                    <div>
                                        <h2 className='leading-5 text-lg'>{inv.name}</h2>
                                        <h3 className='leading-5 text-muted-foreground'>{inv.email}</h3>
                                    </div>
                                </div>
                                <h2 className='number'>{inv.amount}</h2>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
