import SelectionProcess from '../components/SelectionProcess'
function Home() {
  return (
  <>
    <div className="inicio">
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
  </>
  );
}

export default Home;