export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  content: string;
  /** Photo slot: public/photos/<photo>.jpg. Every post shows a real photo. */
  photo: string;
  photoAlt: string;
}

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "cloud-burst-response-battal-2025",
    photo: "blog-cloud-burst-response-battal-2025",
    photoAlt: "Volunteers sorting donated clothes and relief bundles in a hall",
    title: "Cloud Burst Response in Battal",
    excerpt:
      "Karwan-e-Eesaar Welfare Organization responded swiftly to the 2025 cloud burst in Battal, supporting 10+ affected families with essential household items.",
    date: "January 15, 2025",
    tag: "Relief",
    content:
      "When the cloud burst struck Battal in early 2025, our teams were among the first to respond. Working with local community leaders, we identified the most affected families and provided crockery, blankets, and household items essential for their recovery. Our volunteers worked through challenging conditions to ensure no family was left without basic necessities.",
  },
  {
    slug: "eye-camp-200-patients-2024",
    photo: "blog-eye-camp-200-patients-2024",
    photoAlt: "Doctors examining patients at the August 2024 free eye camp",
    title: "Eye Camp Serves 200+ Patients",
    excerpt:
      "A two-day free eye camp brought specialist teams from Sheikhupura, treating over 200 patients with comprehensive eye care.",
    date: "December 10, 2024",
    tag: "Healthcare",
    content:
      "Our 2024 eye camp was our most successful yet, with a specialist team from Sheikhupura providing comprehensive eye examinations, treatments, and referrals. Over 200 patients received care that would have otherwise been inaccessible. Many patients received prescription glasses, while others were referred for specialized treatment.",
  },
  {
    slug: "winter-drive-sos-children-2024",
    photo: "blog-winter-drive-sos-children-2024",
    photoAlt: "Schoolchildren holding the warm sweaters we handed out in winter",
    title: "Winter Drive for SOS Children",
    excerpt:
      "Blankets, warm clothes, and essentials distributed to children at SOS Village and local old age homes.",
    date: "November 20, 2024",
    tag: "Winter Care",
    content:
      "As temperatures dropped, our winter care team distributed warm blankets, jackets, caps, and gloves to children at SOS Village. In partnership with local university societies, we also reached elderly residents of old age homes with warm shawls and care packages.",
  },
  {
    slug: "ramadan-blood-donation-2024",
    photo: "blog-ramadan-blood-donation-2024",
    photoAlt: "Karwan-e-Eesaar volunteers lined up in their vests at the mosque hall",
    title: "Ramadan Blood Donation Camp Success",
    excerpt:
      "50 donors stepped forward at our mosque-based Ramadan blood drive, contributing to saving countless lives.",
    date: "March 25, 2024",
    tag: "Healthcare",
    content:
      "During the blessed month of Ramadan 2024, Karwan-e-Eesaar Welfare Organization organized a blood donation camp at the local mosque. The response was overwhelming — 50 donors came forward in a single day. In partnership with local blood banks, all donations were processed and made available to patients in need.",
  },
  {
    slug: "importance-of-sadaqah",
    photo: "blog-importance-of-sadaqah",
    photoAlt: "Sorted ration packs ready to go to families",
    title: "The Power of Sadaqah: Why Every Contribution Matters",
    excerpt:
      "In Islam, Sadaqah is more than charity — it's a spiritual practice that purifies wealth and strengthens communities.",
    date: "February 10, 2024",
    tag: "Insights",
    content:
      "Sadaqah, voluntary charity in Islam, holds immense spiritual and social significance. The Prophet Muhammad (peace be upon him) taught that even a smile is Sadaqah. At Karwan-e-Eesaar Welfare Organization, we facilitate various forms of Sadaqah — from monetary donations to volunteering time and skills. Every contribution, no matter how small, creates ripples of positive change in communities.",
  },
  {
    slug: "uniform-distribution-2023",
    photo: "blog-uniform-distribution-2023",
    photoAlt: "Schoolchildren queuing for their new sweaters, December 2023",
    title: "School Uniform Drive Transforms Student Confidence",
    excerpt:
      "Government primary school students received sweaters, socks, caps, and shoes in our latest uniform distribution phase.",
    date: "October 5, 2023",
    tag: "Education",
    content:
      "Our latest uniform distribution drive equipped students at local government primary schools with sweaters, warm socks, caps, and shoes. The impact goes beyond clothing — students attend school more regularly and with greater confidence when they have proper uniforms and essentials.",
  },
];
