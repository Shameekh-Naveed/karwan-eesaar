import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Snowflake,
  Users,
  Check,
} from "lucide-react";

const programs = [
  {
    id: "relief",
    icon: AlertTriangle,
    title: "Emergency Relief & Disaster Response",
    description:
      "Rapid response to natural disasters and ongoing support for vulnerable families",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    services: [
      {
        title: "Flood Relief Initiatives",
        items: [
          "2022 Flood Response: Supported 500+ families with clothes and essentials",
          "2025 Cloud Burst Response - Battal: Aided 10+ families with crockery, blankets, household items",
          "Rapid mobilization and on-ground distribution",
        ],
      },
      {
        title: "Monthly Ration Drive",
        items: [
          "Regular support for widows, orphans, and needy families",
          "Monthly distribution of essential food items",
          "Sponsor a family program available",
        ],
      },
      {
        title: "Qurbani Meat Distribution",
        items: [
          "Annual Eid-ul-Adha program",
          "Fair distribution to deserving families",
          "Donor participation opportunities",
        ],
      },
      {
        title: "Emergency Patient Support",
        items: [
          "2025: Meal distribution to 50 families",
          "Hospital assistance programs",
          "Emergency medical support",
        ],
      },
    ],
    cta: "Support Emergency Relief",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Skill Development",
    description: "Empowering youth through knowledge and practical skills for a better future",
    color: "text-trust",
    bgColor: "bg-trust/10",
    services: [
      {
        title: "IT Classes for Huffaz",
        items: [
          "Twice-weekly computer training sessions",
          "Basic IT skills and digital literacy",
          "Volunteer instructor program",
          "Career development support",
        ],
      },
      {
        title: "Taekwondo Training Program",
        items: [
          "Daily training sessions for Huffaz",
          "Focus on discipline and physical fitness",
          "Confidence building through martial arts",
          "Professional instruction",
        ],
      },
      {
        title: "Uniform Distribution Drive",
        items: [
          "Support for government primary school students",
          "Distribution of sweaters, socks, caps, and shoes",
          "Multiple phases successfully completed",
          "Ongoing annual program",
        ],
      },
    ],
    cta: "Sponsor a Student",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Initiatives",
    description: "Bringing quality healthcare services to underserved communities",
    color: "text-primary",
    bgColor: "bg-primary/10",
    services: [
      {
        title: "Eye Camp",
        items: [
          "Annual two-day camps (2024 & 2025)",
          "Specialist team from Sheikhupura",
          "200+ patients treated across camps",
          "Free eye checkups and surgeries",
        ],
      },
      {
        title: "Blood Donation Camps",
        items: [
          "Ramadan 2024: 50+ donors mobilized",
          "Mosque-based community initiative",
          "Partnership with certified blood banks",
          "Regular awareness campaigns",
        ],
      },
      {
        title: "Emergency Ward Support",
        items: [
          "Hospital assistance programs",
          "Support for emergency patients",
          "Volunteer opportunities available",
        ],
      },
    ],
    cta: "Support Healthcare",
  },
  {
    id: "livelihood",
    icon: Briefcase,
    title: "Livelihood & Women Empowerment",
    description: "Creating sustainable income opportunities for women and families",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    services: [
      {
        title: "Sewing Machine Support Program",
        items: [
          "Machines donated to deserving women",
          "Focus on financial independence",
          "Skills training included",
          "Success stories of empowered beneficiaries",
        ],
      },
      {
        title: "Skills Training Initiatives",
        items: [
          "Vocational training programs",
          "Plans for expansion",
          "Income generation support",
        ],
      },
    ],
    cta: "Empower a Woman",
  },
  {
    id: "winter",
    icon: Snowflake,
    title: "Winter Relief Programs",
    description: "Providing warmth and comfort during harsh winter months",
    color: "text-trust",
    bgColor: "bg-trust/10",
    services: [
      {
        title: "SOS Children Winter Care",
        items: [
          "Distribution of blankets and warm clothes",
          "Support for vulnerable children",
          "Annual winter care packages",
        ],
      },
      {
        title: "Old Age Home Winter Support",
        items: [
          "Partnership with university societies",
          "Warm clothing and blanket distribution",
          "Ongoing support and visits",
        ],
      },
    ],
    cta: "Donate Winter Essentials",
  },
];

const communityDrives = [
  "Cleanliness Drive",
  "Traffic Awareness Campaign",
  "Emergency Support Initiatives",
  "Community Health Awareness",
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Our Programs | Eesaar Foundation - Relief, Education, Healthcare</title>
        <meta
          name="description"
          content="Explore Eesaar Foundation's comprehensive programs: emergency relief, education, healthcare, women empowerment, and winter relief initiatives in Pakistan."
        />
        <meta property="og:title" content="Programs & Services | Eesaar Foundation" />
        <meta
          property="og:description"
          content="Comprehensive humanitarian programs serving Pakistani communities through relief, education, healthcare, and livelihood support."
        />
        <link rel="canonical" href="https://eesaarfoundation.org/programs" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="bg-primary py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                Our Programs & Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Comprehensive humanitarian support across emergency relief, education, healthcare,
                and sustainable development
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24">
          <div className="container space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? "" : ""}`}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl ${program.bgColor}`}
                  >
                    <program.icon className={`h-8 w-8 ${program.color}`} />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      {program.title}
                    </h2>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {program.services.map((service, sIndex) => (
                    <Card key={sIndex} className="border-border/50 bg-card">
                      <CardHeader>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.items.map((item, iIndex) => (
                            <li key={iIndex} className="flex items-start gap-2 text-sm">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6">
                  <Link to="/get-involved">
                    <Button variant="default" size="lg">
                      {program.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Drives */}
        <section className="bg-accent py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Community Support Drives
              </h2>
              <p className="mt-4 text-muted-foreground">
                Beyond our core programs, we organize various community initiatives
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {communityDrives.map((drive, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                  >
                    {drive}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Programs;
