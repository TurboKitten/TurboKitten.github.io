function Main(){
    return(
        <main className="container">
            <div className="row">
                <div className="col-12 col-md-4">

                    <section id="Sobre-Mi" className="card card-custom p-3">
                        <h2 className="h5 section-title">Sobre mí</h2>
                        <p style={{ textAlign: 'justify' }}>Un estudiante programador con mucha disposicion de aprender. No importa si truene, llueva o me enferme, mi objetivo es ser el mejor programador posible para poder llevar a cabo los proyectos que me apasionan</p>
                    </section>
                    <section id="Lenguajes" className="card card-custom p-3">
                        <h2 className="h5 section-title">Habilidades Técnicas</h2>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><strong>Lenguajes:</strong> Python, Java.</li>
                            <li className="mb-2"><strong>Bases de Datos:</strong> SQL, MySQL, Oracle.</li>
                            <li className="mb-2"><strong>Herramientas:</strong> Git, Visual Studio Code.</li>
                            <li><strong>Frameworks/CSS:</strong> Bootstrap, Spring Boot.</li>
                        </ul>
                    </section>
                </div>

                <div className="col-12 col-md-8">

                    <section id="Educación" className="card card-custom p-3">
                        <h2 className="h5 section-title">EDUCACION</h2>
                        <div>
                            <h3 className="h6 fw-bold mb-1"> Liceo Republica de Siria | 2007 → 2019</h3>
                            <p className="mb-0">Educación básica y media.</p>
                        </div>
                        <hr className="my-3 text-dark opacity-75 border border-2"/>
                        <div>
                            <h3 className="h6 fw-bold mb-1">Pontificia Universidad Catolica de Chile | 2020 → 2024</h3>
                            <p className="mb-0">Medicina Veterinaria: Licenciatura en Ciencias de la Veterinaria</p>
                        </div>
                        <hr className="my-3 text-dark opacity-75 border border-2"/>
                        <div>
                            <h3 className="h6 fw-bold mb-1">Instituto profesional Duoc Uc | 2025 -- En curso</h3>
                            <p className="mb-0">Ingeniería en Informática mencion Desarrollo de Software.</p>
                        </div>
                        <hr className="my-3 text-dark opacity-75 border border-2"/>
                        <div>
                            <h3 className="h6 fw-bold mb-1">CERTIFICACIONES</h3>
                            <ul>
                                <li>
                                    <h4 className="h6 fw-bold mb-1">Python Essentials 1</h4>
                                    <p className="mb-0">Certificado como progamador entry level en Python por Cisco Networking Academy</p>
                                    <img src="assets/images/certificado 1.png" alt="Foto de certificacion" className="certificate-img"></img>
                                </li>
                            </ul>

                        </div>
                    </section>
                    <br/>
                    <section id="Proyectos" className="card card-custom p-3">
                    <ul>   
                        <li>
                        <h2 className="h5 section-title">PROYECTOS</h2>
                        <div className="mb-3">
                            <h3 className="h6 fw-bold mb-1"> Curriculum Vitae</h3>
                            <p className="text-muted small mb-1">HTML, CSS, Bootstrap</p>
                            <p className="mb-0">Desarrollo y Diseño de una plataforma adaptable a dispositivos moviles y escritorio, y a modo oscuro y claro para ser usado a modo de "Curriculum Vitae".</p>
                        </div>
                        </li>
                        <li>
                        <div>
                            <h3 className="h6 fw-bold mb-1"> Cat-Alog / Fullstack 1</h3>
                            <p className="text-muted small mb-1">Java / Spring boot</p>
                            <p className="mb-0">"Cat-Alog" Es una plataforma en desarrollo la cual permitiria acceder a un amplio catalogo de gatos. Permitira ver fotos e informacion de multiples gatos, con la posibilidad de adoptar y registrar mas</p>
                        </div>
                        </li>
                    </ul>
                    </section>

                </div>

            </div>
        </main>
    )
}

export default Main