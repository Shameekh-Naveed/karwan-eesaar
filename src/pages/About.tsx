import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users, HandHeart, Shield } from "lucide-react";

const values = [
  {
    icon: HandHeart,
    title: "Compassion",
    description: "Serving with empathy and understanding, treating every beneficiary with dignity.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Maintaining complete accountability in all our operations and fund utilization.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Working alongside communities to understand and address their real needs.",
  },
  {
    icon: Heart,
    title: "Islamic Values",
    description: "Guided by principles of Sadaqah, Zakat, and service to humanity.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Eesaar Foundation - Our Mission & Vision</title>
        <meta
          name="description"
          content="Learn about Eesaar Foundation's mission to empower Pakistani communities through humanitarian services rooted in Islamic principles of charity and compassion."
        />
        <meta property="og:title" content="About Eesaar Foundation" />
        <meta
          property="og:description"
          content="Discover our journey of serving humanity with dignity and respect in Pakistan."
        />
        <link rel="canonical" href="https://eesaarfoundation.org/about" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="bg-primary py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                About Eesaar Foundation
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Serving humanity with dignity and respect, guided by the timeless principles of
                compassion and care
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-primary/20 bg-card">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="mt-4 text-muted-foreground">
                    To provide comprehensive humanitarian services to underprivileged communities in
                    Pakistan through emergency relief, education, healthcare, and sustainable
                    livelihood programs. We strive to uplift the most vulnerable members of society
                    while preserving their dignity and self-respect.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 bg-card">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="mt-4 text-muted-foreground">
                    A Pakistan where every individual has access to basic necessities, quality
                    education, healthcare, and opportunities for sustainable growth. We envision
                    empowered communities that can break the cycle of poverty and contribute
                    positively to society.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  Eesaar Foundation was born from a simple yet profound belief: that every human
                  being deserves to live with dignity, regardless of their circumstances. The
                  Arabic word "Eesaar" means selfless generosity—preferring others over oneself—a
                  principle that forms the cornerstone of our work.
                </p>
                <p>
                  Founded by a group of dedicated volunteers in Pakistan, we began with small acts
                  of kindness—distributing rations to widows, organizing blood donation camps, and
                  supporting local communities during emergencies. What started as informal
                  charitable activities has grown into a structured organization touching hundreds
                  of lives.
                </p>
                <p>
                  The devastating floods of 2022 became a defining moment for our foundation. We
                  mobilized quickly, reaching over 500 affected families with essential supplies,
                  clothing, and hope. This experience strengthened our resolve and expanded our
                  vision to include long-term development programs.
                </p>
                <p>
                  Today, Eesaar Foundation operates across multiple areas of humanitarian service:
                  emergency relief, education and skill development, healthcare initiatives, and
                  women empowerment programs. Every program is designed with one goal in mind—to
                  empower communities to build better futures for themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide every action we take
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Info */}
        <section className="bg-primary py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
                Registered & Transparent
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Eesaar Foundation is a registered non-profit organization in Pakistan. We maintain
                complete transparency in our operations and are committed to the highest standards
                of accountability.
              </p>
              <div className="mt-6 inline-block rounded-lg bg-primary-foreground/10 px-6 py-3">
                <p className="text-sm font-medium text-primary-foreground">
                  Registration Number: [Your Registration Number]
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
