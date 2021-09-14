import logo from "../img/logo.png";

const Footer = () => {
    return <footer className="mt-auto">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-3"><img src={logo} alt="Damajuana" width="250"/></div>
                <div className="col-12 text-center">
                    <i className="bi bi-facebook fs-4 mx-2"/>
                    <i className="bi bi-instagram fs-4 mx-2"/>
                    <i className="bi bi-twitter fs-4 mx-2"/>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-12 text-center fs-6">© Damajuana 2021. Todos los derechos reservados</div>
            </div>
        </div>
    </footer>
}

export default Footer