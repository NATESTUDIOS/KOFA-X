import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Info, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">About Kofa x</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We are dedicated to empowering University of Benin students with timely information, academic resources, and
            a supportive community platform that enhances your university experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student Success</h3>
              <p className="text-muted-foreground text-pretty">
                We focus on providing resources and information that help UNIBEN students achieve academic excellence
                and personal growth.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Info className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Information Access</h3>
              <p className="text-muted-foreground text-pretty">
                We ensure that important university information, updates, and resources are easily accessible to all
                students.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-muted-foreground text-pretty">
                We foster a supportive community where UNIBEN students can connect, collaborate, and support each
                other's journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
