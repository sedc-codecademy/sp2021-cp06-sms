
import { React } from 'react';

const Footer = () => {
    return (
        <div className="footer-dark pb-5">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6 item">
                            <h3>Контакт:</h3>
                            <ul>
                                <li><a href="#">Е-маил: simplemobilesolutionsmk@gmail.com</a></li>
                                <li><a href="#">Телефон: +389 70 525 845</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                            <ul>
                                <li><a href="https://www.facebook.com/simplemobilesolutionsmk">Facebook</a></li>
                                <li><a href="https://www.instagram.com/simplemobile.solutions/">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/company/simple-mobile-solutions/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                <p className="pt-1">SEDC © 2021</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer;