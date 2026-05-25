import AnimatedSection from "./AnimatedSection";
export default function Hero() {
  return (
    <AnimatedSection>
      <section id="home" className="hero">
        <h1>Grow Your Business with Digital Marketing</h1>
        <p>
          We help startups and businesses increase traffic, leads, and sales using
          SEO, ads, and social media strategies.
        </p>

        <div>
          <button>Get Free Consultation</button>
          <button className="secondary">View Services</button>
        </div>
      </section>
    </AnimatedSection>
  );
}