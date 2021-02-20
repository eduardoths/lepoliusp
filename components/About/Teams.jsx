import TeamCards from "./TeamCards";

export default function Teams() {
  return (
    <section className="teams">
      <div className="teams-header">
        <img src="/img/teams-background.svg" />
        <h1>Conheça nossos times!</h1>
      </div>
      <div className="teams-cards-container">
        <div className="teams-cards-row">
        <TeamCards title="Aceleração" 
          members={["Gabriel", "Felipe", "Joaquim", "João"]}>
            Time responsável pelo crescimento da marca 
            LEPoli nas redes sociais...
        </TeamCards>
        <TeamCards title="Comunicação" 
          members={["Eduardo", "Beatriz", "Raphael"]}>
            Time responsável pelo crescimento da marca 
            LEPoli nas redes sociais...
        </TeamCards>
        </div>
        <div className="teams-cards-row">
          <TeamCards title="Eventos" 
            members={["Guilherme", "Vinicius"]}>
              Time responsável pelo crescimento da marca 
              LEPoli nas redes sociais...
          </TeamCards>
          <TeamCards title="Gente e Gestão" 
            members={["Diego", "Luísa"]}>
              Time responsável pelo crescimento da marca 
              LEPoli nas redes sociais...
          </TeamCards>
        </div>
      </div>
      <div className="teams-footer">
        <img src="/img/teams-background.svg"/>
      </div>
    </section>
  );
}