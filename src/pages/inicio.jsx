import react from "react";
import { Link } from "react-router-dom";
import '../css/inicioPage.css';

const InicioPage = () => {
    return(
        <section className="sect-container">
            <nav className="navigation">
                <Link to="/acerca" className="link-acerca">Acerca Nosotros</Link>
                <Link to="/crearCuenta" className="link-crear-cuenta">Crear Cuenta</Link>
            </nav>

            <div className="sect-inicio">
                <figure className="fig-container">
                    <img src={require('../assets/img/logo-white.png')} alt="logoIntermedioSeguro" />
                    <h1>InterMedioSeguro</h1>
                </figure>
                <div className="container-modal">
                    <button className="btn-modal">Iniciar Sesion</button>
                </div>
                <div className="container-text">
                    <p>
                    somos una solución a la inseguridad en las compras online, con nuestro intermedio podemos garantizar que tanto el vendedor y el comprador puedan tener seguridad en sus ventas y compras.se parte de la seguridad.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default InicioPage;