import features from "../data/ComparisonTable";
export default function ComparisonTable() {
   

    return (
        <section id="comparison" className="comparison-section">

            <div className="section-header">
                <h2>Compare Our Plans</h2>
                <p>
                    Choose the right plan based on your business needs and growth stage.
                </p>
            </div>

            <div className="table-wrapper">

                <table>

                    <thead>
                        <tr>
                            <th>Features</th>
                            <th>Brand Kickstart</th>
                            <th>Growth Engine</th>
                            <th>Revenue Accelerator</th>
                            <th>Infinity Enterprise</th>
                        </tr>
                    </thead>

                    <tbody>

                        {features.map((item, index) => (
                            <tr key={index}>
                                <td>{item.feature}</td>
                                <td>{item.kickstart}</td>
                                <td>{item.growth}</td>
                                <td>{item.revenue}</td>
                                <td>{item.enterprise}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </section>
    );
}