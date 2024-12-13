import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  year: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of the first project and its key features.",
    year: "2024",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of the second project and its key features.",
    year: "2023",
    image: "/placeholder.svg",
    link: "#",
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <Navigation />
      
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text">Work</h1>
        
        <div className="space-y-8">
          {projects.map((project) => (
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
                <Link href={project.link}>
                  <Button variant="link" className="p-0">
                    Read More →
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

