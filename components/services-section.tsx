import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Users, MessageCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Academic Resources",
      description:
        "Access course materials, study guides, past questions, and academic calendars to excel in your studies.",
    },
    {
      icon: Calendar,
      title: "Campus Updates",
      description:
        "Stay informed about important dates, events, announcements, and deadlines from the university administration.",
    },
    {
      icon: Users,
      title: "Student Community",
      description:
        "Connect with fellow UNIBEN students, join study groups, and participate in campus activities and discussions.",
    },
    {
      icon: MessageCircle,
      title: "Information Hub",
      description:
        "Get answers to frequently asked questions, access student services, and find important contact information.",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">What We Offer</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to stay connected and succeed as a University of Benin student, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
