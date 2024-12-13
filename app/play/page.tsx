import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface PlayProject {
  title: string
  description: string
  year: string
  image: string
  demoLink: string
}

const playProjects: PlayProject[] = [
  {
    title: "Fun Project One",
    description: "An interactive experiment combining design and technology.",
    year: "2024",
    image: "/placeholder.svg",
    demoLink: "#",
  },
  {
    title: "Fun Project Two",
    description: "A playful exploration of web animations and interactions.",
    year: "2023",
    image: "/placeholder.svg",
    demoLink: "#",
  },
]

export default function PlayPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <Navigation />
      
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text">Play</h1>
        
        <div className="space-y-8">
          {playProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <span className="text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
                <Link href={project.demoLink} target="_blank">
                  <Button variant="link" className="p-0">
                    Live Demo →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

