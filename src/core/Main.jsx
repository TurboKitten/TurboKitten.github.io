function Main(){
    return(
        <main class="container">
            <div class="row">
                <div class="col-12 col-md-4">

                    <section id="Sobre mi"class="card card-custom p-3">
                        <h2 class="h5 section-title">Sobre mí</h2>
                        <p style="text-align: justify;">Un estudiante programador con mucha disposicion de aprender. No importa si truene, llueva o me enferme, mi objetivo es ser el mejor programador posible para poder llevar a cabo los proyectos que me apasionan</p>
                    </section>
                    <section id="Lenguajes" class="card card-custom p-3">
                        <h2 class="h5 section-title">Habilidades Técnicas</h2>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2"><strong>Lenguajes:</strong> Python, Java.</li>
                            <li class="mb-2"><strong>Bases de Datos:</strong> SQL, MySQL, Oracle.</li>
                            <li class="mb-2"><strong>Herramientas:</strong> Git, Visual Studio Code.</li>
                            <li><strong>Frameworks/CSS:</strong> Bootstrap, Spring Boot.</li>
                        </ul>
                    </section>
                </div>

                <div class="col-12 col-md-8">

                    <section id="Educación" class="card card-custom p-3">
                        <h2 class="h5 section-title">EDUCACION</h2>
                        <div>
                            <h3 class="h6 fw-bold mb-1"> Liceo Republica de Siria | 2007 -> 2019</h3>
                            <p class="mb-0">Educación básica y media.</p>
                        </div>
                        <hr class="my-3 text-dark opacity-75 border border-2">
                        <div>
                            <h3 class="h6 fw-bold mb-1">Pontificia Universidad Catolica de Chile | 2020 -> 2024</h3>
                            <p class="mb-0">Medicina Veterinaria: Licenciatura en Ciencias de la Veterinaria</p>
                        </div>
                        <hr class="my-3 text-dark opacity-75 border border-2">
                        <div>
                            <h3 class="h6 fw-bold mb-1">Instituto profesional Duoc Uc | 2025 -- En curso</h3>
                            <p class="mb-0">Ingeniería en Informática mencion Desarrollo de Software.</p>
                        </div>
                        <hr class="my-3 text-dark opacity-75 border border-2">
                        <div>
                            <h3 class="h6 fw-bold mb-1">CERTIFICACIONES</h3>
                            <ul>
                                <li>
                                    <h4 class="h6 fw-bold mb-1">Python Essentials 1</h4>
                                    <p class="mb-0">Certificado como progamador entry level en Python por Cisco Networking Academy</p>
                                    <img src="assets/images/certificado 1.png" alt="Foto de certificacion" class="certificate-img">
                                </li>
                            </ul>

                        </div>
                    </section>
                    <br>
                    <section id="Proyectos"class="card card-custom p-3">
                    <ul>   
                        <h2 class="h5 section-title">PROYECTOS</h2>
                        <li>
                        <div class="mb-3">
                            <h3 class="h6 fw-bold mb-1"> Curriculum Vitae</h3>
                            <p class="text-muted small mb-1">HTML, CSS, Bootstrap</p>
                            <p class="mb-0">Desarrollo y Diseño de una plataforma adaptable a dispositivos moviles y escritorio, y a modo oscuro y claro para ser usado a modo de "Curriculum Vitae".</p>
                        </div>
                        </li>
                        <li>
                        <div>
                            <h3 class="h6 fw-bold mb-1"> Cat-Alog / Fullstack 1</h3>
                            <p class="text-muted small mb-1">Java / Spring boot</p>
                            <p class="mb-0">"Cat-Alog" Es una plataforma en desarrollo la cual permitiria acceder a un amplio catalogo de gatos. Permitira ver fotos e informacion de multiples gatos, con la posibilidad de adoptar y registrar mas</p>
                        </div>
                        </li>
                    </ul>
                    </section>

                </div>

            </div>
        </main>
    )
}