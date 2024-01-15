import Pagination from '@/app/ui/invoices/pagination';
import { fetchInvoicesPages } from '../../../lib/data';
import Search from '@/app/ui/search';
import Table from './table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Billwise | Invoices',
};

export default async function Page({ searchParams }: { searchParams?: { query?: string; page?: string; }; }) {

  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Invoices</h1>
      </div>
      <CreateInvoice />
      <div className="flex items-center justify-start gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
      <Table query={query} currentPage={currentPage} />
      {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}