import SelectionProcess from '../components/Home/SelectionProcess'
function Home() {
  return (
  <>
  <section id="home-start">
    <div className="inicio">
      <img src="/img/logo-main_page.png" className="inicio-logo" />
      <div className="inicio-card">
        <div className="inicio-card-titulo">
          Somos a Liga de Empreendedorismo da Poli    
        </div>
        <div className="inicio-card-texto">
          Temos como missão <strong>inspirar</strong>, <strong>conectar</strong> e <strong>capacitar </strong> 
          futuros empreendedores e empreendedoras politécnicos.<br/><br/>
          Venha fazer parte!
        </div>
      </div>
    </div>
    <SelectionProcess />
  </section>
  </>
  );
}

export default Home;