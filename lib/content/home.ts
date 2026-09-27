export const heroSlides = [
  {
    eyebrow: "Monthly rations",
    title: "No family should go to bed hungry",
    subtitle: "100+ deserving families get a food ration from us every month.",
    secondaryCtaLabel: "Volunteer with us",
    secondaryCtaLink: "/get-involved#volunteer",
  },
  {
    eyebrow: "Disaster response",
    title: "When floods hit, we show up",
    subtitle: "500+ families reached with food, clothes and supplies in 2022.",
    secondaryCtaLabel: "See relief work",
    secondaryCtaLink: "/programs/emergency-relief",
  },
  {
    eyebrow: "Education",
    title: "Give hope through education",
    subtitle: "IT classes for Huffaz, Taekwondo training and school uniforms.",
    secondaryCtaLabel: "See education work",
    secondaryCtaLink: "/programs/education",
  },
  {
    eyebrow: "Winter care",
    title: "Warmth for every child this winter",
    subtitle: "Blankets and warm clothes for SOS children and old age homes.",
    secondaryCtaLabel: "See winter drives",
    secondaryCtaLink: "/programs/winter-relief",
  },
] as const;

export const tickerMessages = [
  "Donate now to help children",
  "Monthly rations for deserving families",
  "Easypaisa 0344-0992830",
  "Students: internships now open",
  "Volunteer with Karwan-e-Eesaar",
] as const;

// Six figures so the grid always balances: 3 + 3 on desktop, 2 + 2 + 2 on phones
export const impactStats = [
  { value: 100, label: "Families fed every month", suffix: "+" },
  { value: 500, label: "Families reached in the 2022 floods", suffix: "+" },
  { value: 200, label: "Eye camp patients treated", suffix: "+" },
  { value: 50, label: "Blood donors in one day", suffix: "" },
  { value: 50, label: "Patient families given meals", suffix: "" },
  { value: 30, label: "Huffaz in IT classes", suffix: "+" },
] as const;

export const corePrograms = [
  {
    icon: "HandHeart" as const,
    title: "Emergency Relief",
    description:
      "Rapid response during natural disasters — flood relief, ration drives, and emergency patient support.",
    href: "/programs/emergency-relief",
  },
  {
    icon: "GraduationCap" as const,
    title: "Education & Skills",
    description:
      "IT classes for Huffaz, Taekwondo training, and school uniform drives for government schools.",
    href: "/programs/education",
  },
  {
    icon: "Heart" as const,
    title: "Healthcare",
    description:
      "Free eye camps, blood donation drives, and emergency ward support for communities in need.",
    href: "/programs/healthcare",
  },
  {
    icon: "Home" as const,
    title: "Livelihood Support",
    description:
      "Sewing machine donations and skills training to empower women toward financial independence.",
    href: "/programs/livelihood",
  },
] as const;

export const featuredInitiatives = [
  {
    title: "Monthly Ration Drive",
    description:
      "Supporting widows, orphans, and needy families with essential food supplies every month.",
    tag: "Ongoing",
    href: "/programs/emergency-relief",
  },
  {
    title: "IT Classes for Huffaz",
    description:
      "Twice-weekly computer skills training sessions empowering Huffaz with digital literacy.",
    tag: "Active",
    href: "/programs/education",
  },
  {
    title: "Eye Camp 2025",
    description:
      "Two-day free eye camp with specialist teams providing checkups and treatments.",
    tag: "Upcoming",
    href: "/programs/healthcare",
  },
] as const;

export const howYouCanHelp = [
  {
    title: "Donate",
    description: "Easypaisa or Meezan Bank. Every rupee reaches a family.",
    ctaLabel: "See account details",
    href: "/get-involved#donate",
  },
  {
    title: "Volunteer",
    description: "Join a ration drive, teach a class, or help online.",
    ctaLabel: "Sign up",
    href: "/get-involved#volunteer",
  },
  {
    title: "Intern",
    description: "Students: gain real experience with our team.",
    ctaLabel: "Apply",
    href: "/get-involved#internship",
  },
] as const;

export const latestUpdates = [
  {
    title: "Cloud Burst Response in Battal",
    excerpt:
      "Karwan-e-Eesaar Welfare Organization responded to the 2025 cloud burst, supporting 10+ families with crockery, blankets, and household items.",
    date: "January 2025",
    tag: "Relief",
  },
  {
    title: "Eye Camp Serves 200+ Patients",
    excerpt:
      "A two-day free eye camp with specialists from Sheikhupura treated over 200 patients in our community.",
    date: "December 2024",
    tag: "Healthcare",
  },
  {
    title: "Winter Drive for SOS Children",
    excerpt:
      "Blankets, warm clothes, and essentials distributed to children at SOS Village and local old age homes.",
    date: "November 2024",
    tag: "Winter Care",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Karwan-e-Eesaar Welfare Organization provided our family with rations during the most difficult time. Their volunteers came to our door with dignity and respect.",
    name: "Khadija Bibi",
    role: "Ration Drive Beneficiary",
  },
  {
    quote:
      "The IT classes changed my life. As a Hafiz, I never thought I would learn computers. Now I can support my family with these skills.",
    name: "Ahmed Hassan",
    role: "IT Class Student",
  },
  {
    quote:
      "Volunteering with Karwan-e-Eesaar Welfare Organization during Ramadan blood drives has been the most rewarding experience. The team is truly dedicated.",
    name: "Sarah Khan",
    role: "Volunteer",
  },
  {
    quote:
      "The eye camp treated my mother for free. The specialist team was professional and caring. We are forever grateful.",
    name: "Usman Ali",
    role: "Eye Camp Beneficiary Family",
  },
] as const;
