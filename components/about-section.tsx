import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">About Kofa x</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We are a forward-thinking company dedicated to providing innovative solutions that help businesses thrive in
            the digital age. Our expertise spans across multiple industries, delivering results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mission Focused</h3>
              <p className="text-muted-foreground text-pretty">
                We focus on delivering solutions that align with your business objectives and drive measurable results.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Centered</h3>
              <p className="text-muted-foreground text-pretty">
                Our clients are at the heart of everything we do. We build lasting partnerships based on trust and
                excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Driven</h3>
              <p className="text-muted-foreground text-pretty">
                We leverage the latest technologies and methodologies to stay ahead of industry trends and challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
