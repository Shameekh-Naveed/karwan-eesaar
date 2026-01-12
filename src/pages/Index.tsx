import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import ImpactCounter from "@/components/home/ImpactCounter";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import HowToHelp from "@/components/home/HowToHelp";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eesaar Foundation | Empowering Communities Through Compassion</title>
        <meta
          name="description"
          content="Eesaar Foundation is a Pakistani NGO focused on community welfare, emergency relief, education, healthcare, and livelihood support. Join us in making a difference."
        />
        <meta
          name="keywords"
          content="NGO Pakistan, charity organization, community welfare, flood relief, education programs, healthcare Pakistan, donate Pakistan"
        />
        <meta property="og:title" content="Eesaar Foundation | Empowering Communities Through Compassion" />
        <meta
          property="og:description"
          content="Join Eesaar Foundation in serving humanity with dignity. Support our relief, education, and healthcare programs in Pakistan."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://eesaarfoundation.org" />
      </Helmet>
      <Layout>
        <HeroCarousel />
        <ImpactCounter />
        <ProgramsGrid />
        <HowToHelp />
        <Testimonials />
      </Layout>
    </>
  );
};

export default Index;
