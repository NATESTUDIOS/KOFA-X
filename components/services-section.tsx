import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BarChart3, Shield, Smartphone } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, built with modern technologies and best practices.",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description:
        "Data-driven insights and analytics to help you make informed decisions and optimize your operations.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from digital threats and ensure compliance.",
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize your business processes and technology stack.",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We offer a comprehensive range of services designed to help your business succeed in today's digital
            landscape.
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
