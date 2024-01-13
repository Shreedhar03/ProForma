import React, { Suspense } from "react";
import { fetchCardData, fetchLatestInvoices } from "@/lib/data";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestINvoices from "../../ui/dashboard/latest-invoice";
import Overview from "../../ui/dashboard/overview";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function page() {
  const latestInvoice = await fetchLatestInvoices()

  const cardData = await fetchCardData()
  console.log(cardData)
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <Overview cardData={cardData} />
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <h2>Recent Revenue</h2>
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
        </div>
        <LatestINvoices invoices={latestInvoice} />
      </div>
    </main>
  );
}