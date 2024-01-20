'use client'

import DeleteCustomer from '@/app/delete-customer';
import AlertDialogBox from '@/app/ui/alert-dialog'
import { Trash2 } from 'lucide-react'
import React, { useCallback } from 'react'

interface DeleteCustomerBtnProps {
    customerName: string;
    customerID:string
}

export default function DeleteCustomerBtn({ customerName,customerID }: DeleteCustomerBtnProps) {
    const handleDelete = useCallback(() => {
        DeleteCustomer(customerID); // You may want to pass customerID to DeleteCustomer function
    }, []);
    return (
        <>
            <AlertDialogBox
                onConfirm={handleDelete}
                text={`All the invoices of ${customerName} will also be deleted `}
                actionBtn="Delete Customer"
                triggerBtn={
                    <button type='button' className='absolute top-2 right-2'>
                        <Trash2 className='text-destructive w-4' />
                    </button>
                } />
        </>
    )
}
