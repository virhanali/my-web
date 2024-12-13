import { FloatingShapes } from "@/components/floating-shapes"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingShapes />
      <Navigation />
      
      <div className="z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Hi, I&apos;m Virhan Ali
          </h1>
          <p className="text-gray-600">
            bandung, ID
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link href="/work">
            <Button
              className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
              variant="outline"
            >
              Work
            </Button>
          </Link>
          <Link href="/play">
            <Button
              className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
            >
              Play
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

