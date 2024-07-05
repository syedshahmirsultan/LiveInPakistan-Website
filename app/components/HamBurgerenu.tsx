import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";


//HamBurger Componnet Function
export function HamBurger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* HamBurger Button*/}
        <Button className="flex lg:hidden ml-20 bg-green-950 hover:bg-green-950 px-3 py-auto">
            <RxHamburgerMenu size={26} color="white"  />
        </Button>
      </SheetTrigger>
      <SheetContent>
          <div className="grid gap-4 py-4">
            {/* HamBurger Menu Navigation Options */}
          <div className="grid grid-rows-4  items-center gap-4 text-lg text-green-900 p-1 font-semibold">
           <Link href="/" className="hover:bg-gray-100/50 p-2">Home</Link>
           <Link href="/About" className="hover:bg-gray-100/50 p-2">About</Link>
           <Link href="/Visit" className="hover:bg-gray-100/50 p-2">Visit</Link>
           <Link href="/Study" className="hover:bg-gray-100/50 p-2">Study</Link>
           <Link href="/Life" className="hover:bg-gray-100/50 p-2">Life</Link>
           <Link href="/Contact" className="hover:bg-gray-100/50 p-2">Contact</Link>

        </div></div>
      </SheetContent>
    </Sheet>
  )
}
