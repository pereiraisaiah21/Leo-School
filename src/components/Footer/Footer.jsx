/**
 * 
 * @returns 
 */

export const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__pages">
                    <div className="footer__section">
                        <h3 className="footer__section-title">About Us</h3>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3 className="footer__section-title">Services</h3>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Marketing</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3 className="footer__section-title">Contact</h3>
                        <ul>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">General Inquiries</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3 className="footer__section-title">Resources</h3>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__made-with-love">Made with ❤️ by Your Company</p>
                    <div className="footer__social-icons">
                        <a href="#" className="footer__social-icon"><img src="icon-facebook.png" alt="Facebook" /></a>
                        <a href="#" className="footer__social-icon"><img src="icon-twitter.png" alt="Twitter" /></a>
                        <a href="#" className="footer__social-icon"><img src="icon-instagram.png" alt="Instagram" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
