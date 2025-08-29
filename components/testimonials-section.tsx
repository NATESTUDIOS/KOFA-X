"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CEO",
      content:
        "Kofa x transformed our business operations completely. Their innovative approach and attention to detail exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Dynamics",
      role: "CTO",
      content:
        "The team at Kofa x delivered exceptional results on time and within budget. Their expertise in digital transformation is unmatched.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Partners",
      role: "Operations Director",
      content:
        "Working with Kofa x was a game-changer for our company. They provided solutions that directly impacted our bottom line.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don't just take our word for it. Here's what our clients have to say about working with Kofa x.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 sm:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-center text-pretty mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="text-center">
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
