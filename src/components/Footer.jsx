export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-section">
                    <h2>MarketPro</h2>
                    <p>
                        Helping businesses grow with modern digital marketing
                        strategies and conversion-focused solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-section">
                    <h3>Services</h3>

                    <ul>
                        <li>SEO Optimization</li>
                        <li>Paid Advertising</li>
                        <li>Social Media Marketing</li>
                        <li>Content Creation</li>
                        <li>Brand Strategy</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>

                    <p>Email: info@marketpro.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Location: India</p>

                    <div className="social-icons">
                        <span>🌐</span>
                        <span>📘</span>
                        <span>📸</span>
                        <span>💼</span>
                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <p>© 2026 MarketPro. All Rights Reserved.</p>
            </div>
        </footer>
    );
}