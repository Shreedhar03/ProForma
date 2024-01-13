import { ModeToggler } from "@/components/ModeToggler"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
     <main className='max-w-6xl mx-auto'>
      <Link href={'dashboard'}>Dashboard</Link>
    </main>
     
    </>
  )
}
