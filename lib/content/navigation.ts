export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Emergency Relief", href: "/programs/emergency-relief" },
      { label: "Education & Skills", href: "/programs/education" },
      { label: "Healthcare", href: "/programs/healthcare" },
      { label: "Livelihood & Women Empowerment", href: "/programs/livelihood" },
      { label: "Winter Relief", href: "/programs/winter-relief" },
    ],
  },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  about: {
    title: "About Us",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Our Team", href: "/about#team" },
      { label: "Our Values", href: "/about#values" },
    ],
  },
  programs: {
    title: "Programs",
    links: [
      { label: "Emergency Relief", href: "/programs/emergency-relief" },
      { label: "Education & Skills", href: "/programs/education" },
      { label: "Healthcare", href: "/programs/healthcare" },
      { label: "Livelihood Support", href: "/programs/livelihood" },
      { label: "Winter Relief", href: "/programs/winter-relief" },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "/get-involved#donate" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Partner With Us", href: "/get-involved#partner" },
      { label: "Impact & Reports", href: "/impact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;
