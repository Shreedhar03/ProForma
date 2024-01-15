import React from 'react'
import DashboardSkeleton from '../../ui/skeletons'

export default function Loading() {
  return (
    <div>
      <DashboardSkeleton />
      {/* <h2 className="text-center">Getting details......</h2> */}
    </div>
  )
}
