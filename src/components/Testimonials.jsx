import testimonials from "../data/testimonials";
import AnimatedSection from "./AnimatedSection";

export default function Testimonials() {
  return (
    <AnimatedSection>
      <section id="testimonials" className="testimonials-section">


        <div className="testimonials-heading">
          <h2>What Our Clients Say</h2>
          <p>
            Real results from real businesses who trusted our digital marketing expertise.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">

              <div className="stars">
                {"⭐".repeat(t.rating)}
              </div>

              <p className="review">
                "{t.review}"
              </p>

              <h4>{t.name}</h4>
              <span>{t.role}</span>

            </div>
          ))}

        </div>

      </section>
    </AnimatedSection>

  );
}
