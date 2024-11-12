import "../../../assets/styles/footer.css";
import whiteLogoMini from "../../../assets/images/whiteLogoMini.png";
import inicioPng from "../../../assets/images/inicio.png";

const Footer = () => {
  return (
    <div className="bd-footer footer pt-5">
      <div className="py-4 rodape w-100">
        <div className="row justify-content-evenly w-100">
          <div className="col-auto align-self-center">
            <a className="mb-2" href="" aria-label="Bootstrap">
              <img src={whiteLogoMini} alt="Logo Mini" />
            </a>
          </div>
          <div className="col-auto colRodape">
            <h5>Lumina Tech Consulting</h5>
            <p className="mb-2">
              <i class="fa fa-phone" aria-hidden="true"></i> +55 15 991234567
            </p>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
              Bandeiras Centro Empresarial
            </p>
            <iframe
              className="mapinha mb-2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.418295286592!2d-47.4479711!3d-23.5377324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf61dfbc55474b%3A0xae27b8a395b8398e!2sBandeiras%20Centro%20Empresarial!5e0!3m2!1spt-BR!2sbr!4v1700535792349!5m2!1spt-BR!2sbr"
              width="387"
              height="143"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-auto colRodape">
            <br />
            <p className="mb-2">
            <i className="fab fa-whatsapp" aria-hidden="true"></i> +55 15 99123
              4567
            </p>
            <p className="mb-2">
            <i className="fab fa-instagram" aria-hidden="true"></i> luminatech
            </p>
          </div>
          <div className="col-auto align-self-end">
            <a className="mb-2" href="#">
              <img src={inicioPng} alt="Início" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
