import AnimatedSection from "./AnimatedSection";
import clients from "../data/ClientLogos";
export default function ClientLogos() {
    
    return (
        <AnimatedSection>
            <section id="clients" className="clients-section">

                <div className="section-header">
                    <h2>Trusted by Leading Brands</h2>
                    <p>
                        We have helped businesses grow across multiple industries.
                    </p>
                </div>

                <div className="clients-grid">

                    {clients.map((name, index) => (
                        <div key={index} className="client-card">
                            {name}
                        </div>
                    ))}

                </div>

            </section>
        </AnimatedSection>
    );
}