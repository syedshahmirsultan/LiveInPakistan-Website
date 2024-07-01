import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><RxHamburgerMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
          <div className="grid gap-4 py-4">
          <div className="grid grid-rows-4 items-center gap-4 text-lg p-4 font-semibold">
           <Link href="/" className="bg-gray-100/50">Home</Link>
           <Link href="/" className="bg-gray-100/50">About</Link>
           <Link href="/" className="bg-gray-100/50">Visit</Link>
           <Link href="/" className="bg-gray-100/50">Study</Link>
           <Link href="/" className="bg-gray-100/50">Life</Link>
           <Link href="/" className="bg-gray-100/50">Contact us</Link>

        </div></div>
      </SheetContent>
    </Sheet>
  )
}
