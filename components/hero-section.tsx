import { Button } from "@/components/ui/button"
import { BookOpen, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Your Gateway to <span className="text-accent">UNIBEN</span> Success
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Stay informed with the latest updates, academic resources, and essential information for University of Benin
            students. Your one-stop platform for campus life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Explore Resources
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Join Community
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
