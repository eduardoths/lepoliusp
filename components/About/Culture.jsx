import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CultureCards from "./CultureCards";

export default function Culture() {
  const handleScrollNext = () => {
    document.getElementById('cards-list').scrollBy(360, 0);
  }
  const handleScrollPrev = () => {
    document.getElementById('cards-list').scrollBy(-360, 0);
  }
  return (
    <section className="culture">
      <div className="container container-relative">
        <div className="culture-cards" id="cards-list">
          <ul className="culture-cards-list">
            <li>
              <CultureCards
                title="Missão"
                image="/img/culture-mission.svg">
                  Formar Empreendedores e Empreendedoras na POLI
                  com base em 3 pilares: Inspiração, Conexão e
                  Capacitação
              </CultureCards>
            </li>
            <li>
              <CultureCards
                title="Visão"
                image="/img/culture-vision.svg">
                  Tornar-se referência no Ecossistema 
                  de Empreendedorismo e construir uma 
                  Comunidade de Empreendedores
              </CultureCards>
            </li>
            <li>
              <CultureCards
                title="Valores"
                image="/img/culture-values.svg">
                Amizade, Sonho Grande, Foco em Resultado, No Bulshit, 
                Mente Aberta e Sentimento de Dono.
              </CultureCards>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon onClick={handleScrollPrev} id="projects-prev" icon={faChevronLeft} width="16" className="project-previous" />
        <FontAwesomeIcon onClick={handleScrollNext} id="projects-next" icon={faChevronRight} width="16" className="project-next" />
      </div> 
    </section>
  );
}