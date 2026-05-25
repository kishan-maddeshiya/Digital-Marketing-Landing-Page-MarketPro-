import pricingPlans from "../data/pricing";
import AnimatedSection from "./AnimatedSection";
export default function Pricing() {
  return (
    <AnimatedSection>
      <section id="pricing" className="pricing-section">


        <div className="pricing-heading">
          <h2>Flexible Pricing Plans</h2>

          <p>
            Choose a marketing package designed to help your business
            grow faster, generate leads, and increase revenue.
          </p>
        </div>

        <div className="pricing-grid">

          {pricingPlans.map((p, idx) => (

            <div
              key={idx}
              className={`pricing-card ${p.popular ? "popular" : ""}`}
            >

              {p.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}

              <p className="pricing-tag">{p.tag}</p>

              <h3>{p.name}</h3>

              <div className="price">
                {p.price}
              </div>

              <span className="gst">
                {p.gst}
              </span>

              <ul>

                {p.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}

              </ul>

              <button>
                Buy Now
              </button>

            </div>

          ))}

        </div>

      </section>
    </AnimatedSection>


  );
}
