import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
  <footer className="footer">
    <div className="footer-about">
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <h3>Sobre Nós</h3>
            <p>
              A Liga de Empreendedorismo da Poli foi fundada em dezembro de 2019. Nossa principal missão é
              sermos vetores de criação de um ecossistema empreendedor dentro da Poli, assim como, das futuras
              grandes inovações brasileiras. 
            </p>
            </div>
          <div className="col col-4">
            <h3 className="footer__menu">Menu</h3>
            <ul className="footer__menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Sobre">Quem Somos</Link></li>
              <li><Link href="/Projetos">Projetos</Link></li>
              <li><Link href="/Eventos">Eventos</Link></li>
              <li><Link href="/Blog">Blog</Link></li>
              <li><Link href="/Contato">Contato</Link></li>
            </ul>
          </div>
          <div className="col col-4">
            <h3>Contato</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} width="10"/>&nbsp; 
              Escola Politécnica da USP - Av. Prof. Luciano Gualberto, 380 - Butantã, São Paulo - SP</p>
            <p>
              <strong>Email:</strong> lepoliusp@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-social-media">
      <h3>Acesse nossas redes sociais</h3>
      <div className="flex flex-jc-c">
        <div>
          <a target="_blank" href="https://facebook.com/lepoliusp"><FontAwesomeIcon icon={ faFacebookF } height="36"/></a>
        </div>
        <div>
          <a target="_blank" href="https://instagram.com/lepoliusp/"><FontAwesomeIcon icon={ faInstagram } height="36"/></a>
        </div>
        <div>
            <a target="_blank" href="https://www.linkedin.com/company/lepoliusp/"><FontAwesomeIcon icon={faLinkedinIn} height="36"/></a>
        </div>
      </div>
    </div>
    <div className="footer-scroll-up">
      <h4>Copyright © 2021 Liga de Empreendedorismo da Poli - Todos os direitos reservados</h4>
    </div>
  </footer>
  );
}