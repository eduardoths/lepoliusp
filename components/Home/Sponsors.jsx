import SponsorImage from './SponsorImage';

function Sponsors() {
  return (
    <section className="sponsors">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sponsors-header">
              <h1>Nosso apoiadores</h1>
              <p>Conheça as entidades qeu compraram nosso sonho</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-dr-cl">
        <div className="sponsors-logos">
          <SponsorImage 
            src="/img/logoBTC.svg" 
            href="https://codecraft.com.br/"/>
          <SponsorImage 
            src="/img/logoCodecraft.svg" 
            href="https://codecraft.com.br/" />
        </div>
        <div className="sponsors-logos">
          <SponsorImage 
            src="/img/logoFundacaoEstudar.svg"
            href="https://www.estudar.org.br/"/>
          <SponsorImage 
            src="/img/logoTalent.svg"
            href="https://talentacademy.com.br/"/>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;