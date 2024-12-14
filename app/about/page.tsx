import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github } from 'lucide-react'


export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <Navigation />
      
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Hi again, I&apos;m Virhan
          </h1>
          <p className="text-gray-600">bandung, ID</p>
        </div>

        <div className="space-y-6 text-gray-600">
          <p>
            I&apos;m a software engineer and designer focused on creating clean, user-friendly experiences.
            Currently working on exciting projects that combine creativity with technology at eFishery.
          </p>
          
          <p>
            With a background in web development and design, I strive to build applications
            that are both beautiful and functional.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="https://twitter.com" target="_blank">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://github.com" target="_blank">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

