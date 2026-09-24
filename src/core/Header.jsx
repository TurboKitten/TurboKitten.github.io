function Header(){
    return(
        <header className="header-profile text-center text-md-start mb-4">
        <div className="container">
            
            <button id="btn-theme" className="btn btn-outline-light btn-sm position-absolute top-0 end-0 mt-2 me-2">
                Modo Oscuro
            </button>

            <div className="row align-items-center">
                <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
                    <img src="assets/images/homepage.jpg" alt="Foto de perfil" className="profile-img"/>
                </div>
                <div id="Info basica" className="col-12 col-md-9">
                    <h1 className="fw-bold text-shadow-lg">Diego Andres Garrido Perez</h1>
                    <p className="lead mb-2 text-white">Estudiante de Ingeneria Informática (Desarrollo De Software)</p>
                
                    <div id= "Contacto" className="d-flex flex-wrap align-items-center gap-2 mt-3">
                        <a href="mailto:di.garridop@duocuc.cl" className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm"> Correo </a>
                        <span>|</span>
                        <a href="https://github.com/TurboKitten" target="_blank" className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm">
                            GitHub </a>
                        <span>|</span>
                        <a href="+56950909081" target="_blank" className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm">WhatsApp </a>
                    </div>
                </div>

            </div>
        </div>
    </header>
    )
}

export default Header