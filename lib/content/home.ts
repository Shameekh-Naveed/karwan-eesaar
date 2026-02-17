export const heroSlides = [
  {
    title: "Empowering Communities Through Compassion",
    subtitle:
      "Join Eesaar Foundation in building a brighter future for underprivileged communities across Pakistan.",
    ctaLabel: "Donate Now",
    ctaLink: "donate" as const,
    secondaryCtaLabel: "Become a Volunteer",
    secondaryCtaLink: "/get-involved#volunteer",
  },
  {
    title: "Flood Relief — Standing With Those in Need",
    subtitle:
      "Over 500 families supported during the 2022 floods. We respond when disaster strikes.",
    ctaLabel: "See Our Impact",
    ctaLink: "general" as const,
    secondaryCtaLabel: "Support Relief",
    secondaryCtaLink: "/programs/emergency-relief",
  },
  {
    title: "Education That Transforms Lives",
    subtitle:
      "IT classes for Huffaz, Taekwondo training, and school uniform drives — building futures through knowledge.",
    ctaLabel: "Support Education",
    ctaLink: "donate" as const,
    secondaryCtaLabel: "Our Programs",
    secondaryCtaLink: "/programs/education",
  },
  {
    title: "Winter Care — Warmth for Every Family",
    subtitle:
      "Providing blankets, warm clothes, and essentials to families facing harsh winters.",
    ctaLabel: "Help Families This Winter",
    ctaLink: "donate" as const,
    secondaryCtaLabel: "Learn More",
    secondaryCtaLink: "/programs/winter-relief",
  },
] as const;

export const impactStats = [
  { value: 100, label: "Families Supported Monthly", suffix: "+" },
  { value: 500, label: "Flood Relief Beneficiaries", suffix: "+" },
  { value: 50, label: "Blood Donors Mobilized", suffix: "+" },
  { value: 30, label: "Students in IT Classes", suffix: "+" },
  { value: 200, label: "Eye Camp Patients Treated", suffix: "+" },
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
    icon: "Heart" as const,
    title: "Donate",
    description:
      "Your generous contributions fund our programs and reach those who need it most.",
    ctaLabel: "Donate Now",
    ctaType: "donate" as const,
  },
  {
    icon: "Users" as const,
    title: "Volunteer",
    description:
      "Share your time and skills — from IT instruction to event support.",
    ctaLabel: "Join as Volunteer",
    ctaType: "volunteer" as const,
  },
  {
    icon: "Share2" as const,
    title: "Partner With Us",
    description:
      "Corporate partnerships, university collaborations, and in-kind donations welcome.",
    ctaLabel: "Get in Touch",
    ctaType: "general" as const,
  },
] as const;

export const latestUpdates = [
  {
    title: "Cloud Burst Response in Battal",
    excerpt:
      "Eesaar Foundation responded to the 2025 cloud burst, supporting 10+ families with crockery, blankets, and household items.",
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
      "Eesaar Foundation provided our family with rations during the most difficult time. Their volunteers came to our door with dignity and respect.",
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
      "Volunteering with Eesaar during Ramadan blood drives has been the most rewarding experience. The team is truly dedicated.",
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
