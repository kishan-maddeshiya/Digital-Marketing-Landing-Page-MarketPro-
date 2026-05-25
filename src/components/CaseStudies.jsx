import AnimatedSection from "./AnimatedSection";
import studies from "../data/CaseStudies";
export default function CaseStudies() {

   

    return (
        <AnimatedSection>
            <section id="case-studies" className="case-studies-section">

                <div className="section-header">
                    <h2>Success Case Studies</h2>

                    <p>
                        Real business-focused strategies that delivered measurable growth and results.
                    </p>
                </div>

                <div className="case-grid">

                    {studies.map((item, index) => (

                        <div key={index} className="case-card">

                            <div className="case-badge">
                                Case Study
                            </div>

                            <h3>{item.company}</h3>

                            <div className="case-content">

                                <p>
                                    <strong>Problem:</strong>
                                    {" "}
                                    {item.problem}
                                </p>

                                <p>
                                    <strong>Solution:</strong>
                                    {" "}
                                    {item.solution}
                                </p>

                                <p className="result">
                                    {item.result}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>
        </AnimatedSection>
    );
}