import React from 'react'

interface cardData {
    numberOfCustomers: number,
    numberOfInvoices: number,
    totalPaidInvoices: string,
    totalPendingInvoices: string
}
const displayText: { [key: string]: string } = {
    numberOfCustomers: "Total Customers",
    numberOfInvoices: "Total Invoices",
    totalPaidInvoices: "Collected",
    totalPendingInvoices: "Pending"
}
export default function Overview({ cardData }: { cardData: cardData }) {
    return (
        <section className='flex gap-3 w-full justify-center sm:justify-start flex-wrap'>
            {
                Object.entries(cardData).map(([key, value], uid) => {
                    return <div className='border border-secondary w-52 p-3 rounded-lg' key={uid}>
                        <p className='text-sm text-muted-foreground'>{displayText[key]}</p>
                        <p className='text-3xl font-semibold mt-2 logo number text-primary'>{value}</p>
                    </div>
                })
            }
        </section>
    )
}
