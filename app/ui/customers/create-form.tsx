import { CustomerField } from '../../../lib/definitions';
import Link from 'next/link';
import {
    AtSymbolIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/lib/actions';
import { User2Icon } from 'lucide-react';

export default function Form() {
  
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-secondary p-4 md:p-6 w-full sm:w-7/12">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-base font-normal">
            Customer name
          </label>
          <div className="relative">
          <div className="relative">
              <input
                id="customer_name"
                name="customer_name"
                type="text"
                placeholder="Enter customer name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-base outline-2 placeholder:text-gray-500"
                required
              />
              <User2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-base font-normal">
            Customer Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customer_email"
                name="customer_email"
                type="email"
                placeholder="Enter customer email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-base outline-2 placeholder:text-gray-500"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

       
      </div>
      <div className="mt-6 flex justify-start gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-red-600 text-background px-4 text-base font-medium transition-colors"
        >
          Cancel
        </Link>
        <Button type="submit" className='bg-green-600 text-background font-medium'>Create Customer</Button>
      </div>
    </form>
  );
}
