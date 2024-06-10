import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table';
 
export const metadata: Metadata = {
  title: 'Customers',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

return (
  <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}></h1>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
    </div>
   <Suspense key={query} fallback={<CustomersTableSkeleton />}>
      <Table query={query} />
    </Suspense>
  </div>
);
}