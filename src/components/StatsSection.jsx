import { useEffect, useState } from "react";

export default function StatsSection() {

    const [counts, setCounts] = useState({
        revenue: 0,
        leads: 0,
        projects: 0,
        satisfaction: 0,
    });

    useEffect(() => {


        let revenue = 0;
        let leads = 0;
        let projects = 0;
        let satisfaction = 0;

        const interval = setInterval(() => {

            revenue += 5;
            leads += 200;
            projects += 10;
            satisfaction += 2;

            setCounts({
                revenue: revenue > 250 ? 250 : revenue,
                leads: leads > 10000 ? 10000 : leads,
                projects: projects > 500 ? 500 : projects,
                satisfaction: satisfaction > 98 ? 98 : satisfaction,
            });

            if (
                revenue >= 250 &&
                leads >= 10000 &&
                projects >= 500 &&
                satisfaction >= 98
            ) {
                clearInterval(interval);
            }

        }, 50);

        return () => clearInterval(interval);


    }, []);

    return (<section id="stats" className="stats-section">


        <div className="section-header">

            <h2>Results That Drive Business Growth</h2>

            <p>
                Our digital marketing strategies deliver measurable success for businesses.
            </p>

        </div>

        <div className="stats-grid">

            <div className="stat-card">
                <h3>{counts.revenue}%</h3>
                <p>Revenue Growth</p>
            </div>

            <div className="stat-card">
                <h3>{counts.leads}+</h3>
                <p>Qualified Leads</p>
            </div>

            <div className="stat-card">
                <h3>{counts.projects}+</h3>
                <p>Projects Completed</p>
            </div>

            <div className="stat-card">
                <h3>{counts.satisfaction}%</h3>
                <p>Client Satisfaction</p>
            </div>

        </div>

    </section>

    );
}
