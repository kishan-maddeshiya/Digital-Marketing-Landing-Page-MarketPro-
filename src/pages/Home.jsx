import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSlider from "../components/ServicesSlider";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import PainPoints from "../components/PainPoints";
import SolutionSection from "../components/SolutionSection";
import ComparisonTable from "../components/ComparisonTable";
import ClientLogos from "../components/ClientLogos";
import CaseStudies from "../components/CaseStudies";
import StatsSection from "../components/StatsSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />.
            <ServicesSlider />
            <Pricing />
            <Testimonials />
            <CTA />
            <PainPoints />
            <SolutionSection />
            <ComparisonTable />
            <ClientLogos />
            <CaseStudies />
            <StatsSection />
            <ContactForm />
            <Footer />
            <WhatsAppButton />
        </>
    );
}