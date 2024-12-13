"use client"

import { Home, User, X } from 'lucide-react'
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { useEffect, useState } from 'react'


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical md breakpoint
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <div className="fixed top-4 right-4 md:right-auto md:left-1/2 md:translate-x-[400px] z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white shadow-lg w-12 h-12 flex items-center justify-center z-50"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[230px] bg-white rounded-3xl p-6 shadow-2xl h-fit"
          style={{
            position: 'absolute',
            top: '68px',
            right: isMobile ? '15px' : '835px',
            animation: isOpen ? 'scaleIn 0.2s ease-out' : 'scaleOut 0.2s ease-in',
            transformOrigin: 'top center'
          }}
        >
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 p-2 text-gray-500 hover:text-gray-900 transition-colors font-medium",
                pathname === "/" && "text-gray-900"
              )}
            >
              <Home className="h-5 w-5" />
              <span className="text-base">home</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 p-2 text-gray-500 hover:text-gray-900 transition-colors font-medium",
                pathname === "/about" && "text-gray-900"
              )}
            >
              <User className="h-5 w-5" />
              <span className="text-base">about</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

