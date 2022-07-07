export const Footer = () => {
    return(
        <footer className="footer" id="f">
            <div className="footer__content">
                <div className="footer__content--main">
                    <h3>Flama ©</h3>
                    <p>Indumentaria deportiva.</p>
                </div>
                <div className="footer__content--divlist">
                    <h3>Store</h3>
                    <ul>
                        <li><a href="#f">Zapatillas</a></li>
                        <li><a href="#f">Buzos</a></li>
                        <li><a href="#f">Camperas</a></li>
                        <li><a href="#f">Sport</a></li>
                        <li><a href="#f">Accesorios</a></li>
                        <li><a href="#f">Pantalones</a></li>
                    </ul>
                </div>
                <div className="footer__content--divlist">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#f"></a></li>
                        <li><a href="#f">Consultas</a></li>
                        <li><a href="#f">Quejas</a></li>
                        <li><a href="#f">City Style</a></li>
                        <li><a href="#f">News</a></li>
                    </ul>
                </div>
                
                <div className="footer__content--divlist">
                    <h3>Nosotros</h3>
                    <ul>
                        <li><a href="#f">Acerca de nosotros</a></li>
                        <li><a href="#f">Contactenos</a></li>
                        <li><a href="#f">Afiliados</a></li>
                        <li><a href="#f">Recursos</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__media">
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-facebook-f"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-twitter"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-youtube"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-instagram"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-linkedin-in"></i></a></div>
            </div>
            <div className="footer__copy">
                <p>©Copyright. All rights reserved.</p>
            </div>
        </footer>
    )
}