export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

// Add a "Legal" group here once Privacy and Terms pages actually exist
export const footerLinks = {
  about: {
    title: "Organization",
    links: [
      { label: "About us", href: "/about" },
      { label: "Blog & updates", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  programs: {
    title: "Programs",
    links: [
      { label: "Emergency relief", href: "/programs/emergency-relief" },
      { label: "Education", href: "/programs/education" },
      { label: "Healthcare", href: "/programs/healthcare" },
      { label: "Livelihood", href: "/programs/livelihood" },
      { label: "Winter relief", href: "/programs/winter-relief" },
    ],
  },
  getInvolved: {
    title: "Get involved",
    links: [
      { label: "Donate", href: "/get-involved#donate" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Internships", href: "/get-involved#internship" },
      { label: "Partner with us", href: "/get-involved#partner" },
    ],
  },
} as const;
