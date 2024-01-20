import Image from 'next/image'
import { fetchCustomers } from '../../../lib/data'
import React from 'react'
import { PlusIcon, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { deleteCustomer } from '@/lib/actions'
import AlertDialogBox from '@/app/ui/alert-dialog'
import { AlertDialogAction } from '@radix-ui/react-alert-dialog'

export default async function page() {
    const handleDeleteCustomer = async (e: FormData) => {
        "use server"
        console.log(e)
        deleteCustomer(e)
    }
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
                                <form action={deleteCustomer}>
                                    <input type="text"
                                        name='cusId'
                                        id='cusId'
                                        value={cus.id} className='hidden'
                                        readOnly />
                                    <button type='submit' className='absolute top-2 right-2'>
                                        <Trash2 className='text-destructive w-4' />
                                    </button>
                                </form>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

{/* <AlertDialogBox
    text={`All the invoices of ${cus.name} will also be deleted `}
    actionMessage='Delete Customer'
    actionBtn={
        <button type='submit' className='absolute top-2 right-2'>
            <Trash2 className='text-destructive w-6' />
        </button>
    }
    triggerBtn={
        <button type='button' className='absolute top-2 right-2'>
            <Trash2 className='text-destructive w-6' />
        </button>
    } /> */}
