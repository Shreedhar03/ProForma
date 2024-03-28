import { CustomerField } from '../../../lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/lib/actions';
import SubmitBtn from '../submit-btn';

const productCategories = [
  // categories of paper in printing industry
  'Sticker Paper',
  'Art Paper',
  'Bond Paper',
  'Newsprint',
  'Coated Paper',
  'Uncoated Paper',
  'Cardstock',
  'Construction Paper',
];
export default function Form({ customers }: { customers: CustomerField[] }) {

  return (

    customers.length === 0 ? <Link href={'/dashboard/customers/create'}>You need to <span className='text-primary underline underline-offset-4'>add customers</span> to create an invoice</Link> :
      <form action={createInvoice}>
        <div className="rounded-md bg-secondary p-4 md:p-6 w-full sm:w-7/12">
          {/* Customer Name */}
          <div className="mb-4">
            <label htmlFor="customer" className="mb-2 block text-base font-normal">
              Choose customer
            </label>
            <div className="relative">
              <select
                id="customer"
                name="customerId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-base outline-2 placeholder:text-gray-500"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a customer
                </option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Item Category */}
          <div className="mb-4">
            <label htmlFor="customer" className="mb-2 block text-base font-normal">
              Product Category
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-base outline-2 placeholder:text-gray-500"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Product Category
                </option>
                {productCategories.map((p,key) => (
                  <option key={key} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
                    
          {/* Quantity  */}
          <div className="mb-4">
            <label htmlFor="qty" className="mb-2 block text-base font-normal">
            Quantity(No. of Reams)
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="qty"
                  name="qty"
                  type="number"
                  step="0.01"
                  placeholder="Enter Quantity"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-base outline-2 placeholder:text-gray-500"
                  required
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Invoice Amount */}
          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-base font-normal">
              Rate per Ream
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  placeholder="Enter INR amount"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-base outline-2 placeholder:text-gray-500"
                  required
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Invoice Status */}
          <fieldset>
            <legend className="mb-2 block text-base font-normal">
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
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    required
                  />
                  <label
                    htmlFor="pending"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-normal text-gray-600"
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
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    required
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-normal text-white"
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
            className="flex h-10 items-center rounded-lg bg-red-600 text-background px-4 text-base font-medium transition-colors"
          >
            Cancel
          </Link>
          <SubmitBtn text="Create Invoice" />
        </div>
      </form>
  );
}
