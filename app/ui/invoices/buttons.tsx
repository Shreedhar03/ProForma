import { deleteInvoice } from '@/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="mt-2 flex py-1 items-center rounded-lg bg-primary text-background font-semibold px-3 w-[122px]"
    >
      <p className='pr-1 font-semibold'>Add new</p>
      <PlusIcon className="h-5" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
