import MyAvatar from '@/components/AvatarDemo'
import { DrawerDemo } from '@/components/Drawer'
import { ModeToggler } from '@/components/ModeToggler'
import { SheetDemo } from '@/components/Sheet'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyAvatar />
      <DrawerDemo />
      <ModeToggler />
      <SheetDemo/>
    </main>
  )
}
