import PainPointsdata from "../data/PainPoints";
export default function PainPoints() {


    return (
        <section id="painpoints" className="painpoints-section">

            <div className="section-header">
                <h2>Challenges Businesses Face</h2>
                <p>
                    Most businesses struggle with these common digital marketing problems.
                </p>
            </div>

            <div className="painpoints-grid">

                {PainPointsdata.map((item, index) => (
                    <div key={index} className="painpoint-card">
                        <h3>⚠️ {item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}