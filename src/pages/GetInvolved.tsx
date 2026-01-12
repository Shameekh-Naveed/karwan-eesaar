import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Heart,
  CreditCard,
  Smartphone,
  Building2,
  Users,
  Handshake,
  Check,
  Shield,
} from "lucide-react";

const donationOptions = [
  {
    title: "General Fund",
    description: "Support where it's needed most",
    amount: "Any amount",
  },
  {
    title: "Sponsor a Family",
    description: "Monthly ration support for a family",
    amount: "PKR 5,000/month",
  },
  {
    title: "Sponsor a Student",
    description: "Support IT education for a Hafiz",
    amount: "PKR 2,000/month",
  },
  {
    title: "Eye Camp Sponsor",
    description: "Fund cataract surgeries",
    amount: "PKR 15,000/surgery",
  },
];

const volunteerOpportunities = [
  "IT Instructor for Huffaz Classes",
  "Event Support & Coordination",
  "Medical Professional (Eye Camps)",
  "Distribution Drive Volunteer",
  "Social Media & Outreach",
  "Administrative Support",
];

const GetInvolved = () => {
  return (
    <>
      <Helmet>
        <title>Get Involved | Donate & Volunteer - Eesaar Foundation</title>
        <meta
          name="description"
          content="Support Eesaar Foundation through donations, volunteering, or partnerships. Every contribution helps us serve Pakistani communities in need."
        />
        <meta property="og:title" content="Get Involved | Eesaar Foundation" />
        <meta
          property="og:description"
          content="Donate, volunteer, or partner with us to make a difference in the lives of those who need it most."
        />
        <link rel="canonical" href="https://eesaarfoundation.org/get-involved" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="bg-primary py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                Get Involved
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Every act of kindness creates ripples of change. Choose how you'd like to make a
                difference today.
              </p>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="scroll-mt-24 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Make a Donation
              </h2>
              <p className="mt-4 text-muted-foreground">
                Your generosity directly impacts lives. 100% of donations go towards our programs.
              </p>
            </div>

            {/* Donation Options */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {donationOptions.map((option, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card transition-all hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">{option.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                    <p className="mt-3 text-lg font-bold text-primary">{option.amount}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Methods */}
            <Card className="mt-12 border-2 border-primary/20 bg-accent">
              <CardHeader>
                <CardTitle className="text-center">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex items-center gap-4 rounded-lg bg-card p-4">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">
                        Account: Eesaar Foundation
                        <br />
                        Bank: [Bank Name]
                        <br />
                        IBAN: [Account Number]
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-card p-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">JazzCash / EasyPaisa</p>
                      <p className="text-sm text-muted-foreground">
                        JazzCash: 0300-1234567
                        <br />
                        EasyPaisa: 0300-1234567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-card p-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Card Payment</p>
                      <p className="text-sm text-muted-foreground">
                        Secure online payment
                        <br />
                        coming soon
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>All donations are secure and tax-deductible where applicable</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="scroll-mt-24 bg-accent py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Volunteer With Us
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Join our team of dedicated volunteers and be part of meaningful change in your
                  community. No experience necessary—just a willing heart.
                </p>

                <div className="mt-8">
                  <h3 className="font-semibold text-foreground">Current Opportunities</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {volunteerOpportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Volunteer Form */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Volunteer Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+92 300 1234567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interests">Areas of Interest</Label>
                      <Textarea
                        id="interests"
                        placeholder="Tell us how you'd like to help..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section id="partner" className="scroll-mt-24 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Partner With Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Collaborate with Eesaar Foundation to amplify your social impact. We welcome
                partnerships with corporations, educational institutions, and other NGOs.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                  <Building2 className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">Corporate Partnerships</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    CSR initiatives, employee volunteering, and cause marketing
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                  <GraduationCap className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">University Collaborations</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Student volunteering, research partnerships, and awareness campaigns
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                  <Heart className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">In-Kind Donations</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Donate goods, services, or facilities to support our programs
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="default" size="lg">
                  Contact Us for Partnership
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// Missing import
import { GraduationCap } from "lucide-react";

export default GetInvolved;
