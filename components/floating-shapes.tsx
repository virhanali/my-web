"use client"

import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Array<{ id: number; style: React.CSSProperties }>>([])

  useEffect(() => {
    const newShapes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 50 + 20}px`,
        height: `${Math.random() * 50 + 20}px`,
        animationDelay: `${Math.random() * 20}s`,
        opacity: 0.1,
      },
    }))
    setShapes(newShapes)
  }, [])

  return (
    <div className="floating-shapes">
      {shapes.map((shape) => (
        <div key={shape.id} className="shape" style={shape.style} />
      ))}
    </div>
  )
}

