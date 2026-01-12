import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Karachi, Pakistan",
    subtext: "Office location details coming soon",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+92 300 123 4567",
    href: "tel:+923001234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@eesaarfoundation.org",
    href: "mailto:info@eesaarfoundation.org",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    subtext: "Sunday: Closed",
  },
];

const faqs = [
  {
    question: "How can I make a donation?",
    answer:
      "You can donate through bank transfer, JazzCash, or EasyPaisa. Visit our Get Involved page for complete details. We also accept in-kind donations for our various programs.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, Eesaar Foundation is a registered non-profit organization. Donations may be tax-deductible depending on your local tax laws. We provide official donation receipts upon request.",
  },
  {
    question: "How is my donation used?",
    answer:
      "100% of your donation goes directly to our programs. We maintain complete transparency and can provide detailed reports on how funds are utilized across our relief, education, healthcare, and livelihood programs.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "We welcome volunteers of all backgrounds! Visit our Get Involved page and fill out the volunteer registration form. We'll match your skills and interests with appropriate opportunities.",
  },
  {
    question: "Can I sponsor a specific program?",
    answer:
      "Absolutely! You can choose to sponsor our monthly ration drive, IT education program, eye camps, or any other initiative. Contact us for dedicated sponsorship packages.",
  },
  {
    question: "How do you select beneficiaries?",
    answer:
      "We work with local community leaders and conduct thorough assessments to identify the most deserving individuals and families. Our focus is on widows, orphans, and those facing extreme hardship.",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Eesaar Foundation - Get in Touch</title>
        <meta
          name="description"
          content="Contact Eesaar Foundation for donations, volunteering, or partnerships. Reach us via phone, email, or WhatsApp. We're here to help."
        />
        <meta property="og:title" content="Contact Eesaar Foundation" />
        <meta
          property="og:description"
          content="Get in touch with us to learn more about our programs or how you can help."
        />
        <link rel="canonical" href="https://eesaarfoundation.org/contact" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="bg-primary py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                We'd love to hear from you. Reach out with questions, feedback, or to learn how you
                can get involved.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions about our programs or want to contribute? We're here to help.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                        {item.subtext && (
                          <p className="text-sm text-muted-foreground">{item.subtext}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 rounded-2xl bg-accent p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142_70%_45%)]">
                      <MessageCircle className="h-6 w-6 text-[hsl(0_0%_100%)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Chat on WhatsApp</p>
                      <p className="text-sm text-muted-foreground">
                        Quick response for urgent queries
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block"
                  >
                    <Button variant="default">Start WhatsApp Chat</Button>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+92 300 1234567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                Find answers to common questions about donations, volunteering, and our programs
              </p>

              <Accordion type="single" collapsible className="mt-8">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
