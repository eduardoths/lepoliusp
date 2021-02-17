import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMailBulk, faMapMarkerAlt } from  '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faInstagramSquare, faLinkedinIn, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import ContatoForm from '../components/Contato/ContatoForm';

function Contato() {
  return (
  <div className="contato">
    <div className="container">
        <h3>Tem alguma dúvida?</h3>
        <h1>Fale com a gente</h1>
        <div className="row">
          <div className="col-3">
            <span className="contato-texto contato-destaque">
              <FontAwesomeIcon icon={faMapMarkerAlt} width="10"/> Escola Politécnica da USP
            </span>
            <span className="contato-texto">&nbsp;</span>
            <span className="contato-texto">
              Av. Prof Luciano Gualberto, 380
            </span>
            <span className="contato-texto">
              Butantã, São Paulo - SP
            </span>
            <span className="contato-texto">&nbsp;</span>
            <span className="contato-texto contato-destaque">
              Redes sociais e email:
            </span>
            <span className="contato-texto contato-texto-2">
              <FontAwesomeIcon icon={ faFacebookF } height="1.2rem"/> <a target="_blank" href="https://facebook.com/lepoliusp">facebook.com/lepoliusp</a>
            </span>
            <span className="contato-texto contato-texto-2">
              <FontAwesomeIcon icon={ faInstagram } height="1.2rem"/> <a target="_blank" href="https://instagram.com/lepoliusp">@lepoliusp</a>
            </span>
            <span className="contato-texto contato-texto-2">
              <FontAwesomeIcon icon={ faLinkedinIn } height="1.2rem"/> <a href="https://www.linkedin.com/company/lepoliusp/">linkedin.com/company/lepoliusp</a>
            </span>
            <span className="contato-texto contato-texto-2">
              <FontAwesomeIcon icon={ faEnvelope } height="1.2rem"/> <a href="mailto:lepoliusp@gmail.com">lepoliusp@gmail.com</a>
            </span>
          </div>
          <div className="col-9">
            <ContatoForm />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Contato;