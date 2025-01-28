import react from "react";
import { Link } from "react-router-dom";
import '../css/acerca.css';




const AcercaPage = () => {
 return (


  
              <div>
                <header>
                  <h1>Acerca de Nosotros</h1>
                </header>

               
            <nav className="navigation">
                <Link to="/" className="link-inicio">inicio</Link>
                
            </nav>
          
                <main>
                  {/* Sección de Historia */}
                  <section className="about-us">
                    <div className="container">
                      <div className="text-content">
                        <h2>Nuestra Historia</h2>
                        <p>
                          Fundada en 2023, nuestra empresa ha crecido rápidamente gracias a un firme
                          compromiso con la calidad y la innovación. Desde nuestros inicios, hemos
                          trabajado arduamente para ofrecer soluciones excepcionales a nuestros clientes,
                          superando sus expectativas en cada proyecto. Nuestro equipo de profesionales
                          apasionados está dedicado a transformar ideas en realidades exitosas.
                        </p>
                      </div>
                      <div className="image-content">
                        <video controls width="600">
                          
                        <source src={require('../assets/media/Brown Inspirational Quote.mp4')} type="video/mp4" />
                          Tu navegador no soporta la etiqueta de video.
                        </video>
                      </div>
                    </div>
                  </section>
          
                  {/* Sección de Valores */}
                  <section className="values">
                    <div className="container">
                      <h2>Nuestros Valores</h2>
                      <div className="value-list">
                        <div className="value-item">
                          <h3>Integridad</h3>
                          <p>Actuamos con transparencia y honestidad en todas nuestras operaciones y relaciones.</p>
                        </div>
                        <div className="value-item">
                          <h3>Innovación</h3>
                          <p>Fomentamos un entorno donde las ideas frescas y creativas pueden prosperar.</p>
                        </div>
                        <div className="value-item">
                          <h3>Compromiso</h3>
                          <p>Nos dedicamos a alcanzar la excelencia en cada proyecto y a superar las expectativas de nuestros clientes.</p>
                        </div>
                      </div>
                      <div className="image-content">
                      <img src={require('../assets/img/logo-white.png')} alt="logoIntermedioSeguro" />
                      </div>
                    </div>
                  </section>
          
                  {/* Sección de Equipo */}
                  <section className="team">
                    <div className="container">
                      <h2>Conoce a Nuestro Equipo</h2>
                      <div className="team-member">
                      <img src={require('../assets/img/duvan.jpeg')} alt="duvanjimenez" />
                        <h3>DUVAN JIMENEZ</h3>
                        <p><strong>Director General:</strong> DUVAN lidera el equipo con una visión estratégica y una amplia experiencia en el sector. Su liderazgo ha sido fundamental en nuestro crecimiento y éxito.</p>
                                 </div>
                      <div className="team-member">
                      <img src={require('../assets/img/FOTOK.jpeg')} alt="kevin" />
                        <h3>KEVIN GALVIS</h3>
                        <p><strong>Desarrollador Senior:</strong> KEVIN lidera el equipo técnico con su vasta experiencia en desarrollo de software, asegurando la calidad y eficacia de nuestras soluciones tecnológicas.</p>
                      </div>
                    </div>
                  </section>
                </main>
          
                <footer>
                  <p>&copy; 2024 Nuestra Empresa. Todos los derechos reservados.</p>
                </footer>
              </div>
            );
          }
          
   


export default AcercaPage;