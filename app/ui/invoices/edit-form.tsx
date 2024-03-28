'use client';

import { CustomerField, InvoiceForm } from '../../../lib/definitions';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    CurrencyRupeeIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/lib/actions';
import SubmitBtn from '../submit-btn';
import { formatCurrency } from '@/lib/utils';

export default function EditInvoiceForm({
    invoice,
    customers,
}: {
    invoice: InvoiceForm;
    customers: CustomerField[];
}) {

    const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
    return (
        <form action={updateInvoiceWithId}>
            <div className="rounded-md bg-secondary p-4 w-full sm:w-9/12 md:p-6">
                {/* Customer Name */}

                <p className='mb-2 text-xl text-primary'>
                    {
                        customers.filter(customer => customer.id === invoice.customer_id)[0].name
                    }
                </p>

                {/* Invoice Amount */}
                <p>
                    Total Amount: {' '} {
                        invoice.amount.toLocaleString('INR', {
                            style: 'currency',
                            currency: 'INR',
                        })
                    }
                </p>

                {/* Invoice Status */}
                <fieldset>
                    <legend className="mb-2 block">
                        Set the invoice status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-secondary px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="pending"
                                    name="status"
                                    type="radio"
                                    value="pending"
                                    defaultChecked={invoice.status === 'pending'}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-muted text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="pending"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-gray-600 bg-slate-400"
                                >
                                    Pending <ClockIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="paid"
                                    name="status"
                                    type="radio"
                                    value="paid"
                                    defaultChecked={invoice.status === 'paid'}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-muted text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="paid"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Paid <CheckIcon className="h-4 w-4" />
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="mt-6 flex justify-start gap-4">
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-red-600 hover:bg-red-700 px-4"
                >
                    Cancel
                </Link>
                <SubmitBtn text='Edit Invoice' />
            </div>
        </form>
    );
}
