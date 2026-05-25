import solutions from "../data/solutions";
export default function SolutionSection() {


    return (
        <section id="solution" className="solution-section">

            <div className="section-header">
                <h2>How We Solve Your Problems</h2>
                <p>
                    Our strategies are designed to transform your business growth using proven digital marketing systems.
                </p>
            </div>

            <div className="solution-grid">

                {solutions.map((item, index) => (
                    <div key={index} className="solution-card">
                        <h3> {item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}