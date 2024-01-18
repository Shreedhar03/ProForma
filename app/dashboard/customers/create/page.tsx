import Form from '@/app/ui/customers/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import React from 'react'

export default function page() {
  return (
    <main>
      <Breadcrumbs breadcrumbs={[
        {label:'Customers',href:'/dashboard/customers'},
        {label:'Create',href:'/dashboard/customers/create',active:true},
      ]}/>

      <Form />
    </main>
  )
}
