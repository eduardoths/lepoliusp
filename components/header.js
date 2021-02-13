import Link from 'next/link';
import { useState } from 'react';

function MenuSpan(props) {
  return <span style={props.style}></span>
}

function MenuLinks(props) {
  let classConcat = props.classConcat;
  if (classConcat === undefined)
    classConcat = "";
  return (
    <div style={props.style} className={"header__links " + classConcat}>
      <Link href="/">Home</Link>
      <Link href="/Sobre">Quem Somos</Link>
      <Link href="/Projetos">Projetos</Link>
      <Link href="/Eventos">Eventos</Link>
      <Link href="/Blog">Blog</Link>
      <Link href="/Contato">Contato</Link>
    </div>
  );
}

function MenuSimbolo(props) {
  const [isFechado, setIsFechado] = useState(true);
  const [estilos, setEstilos] = useState(Array(3).fill(null));
  
  function handleClick () {
    const proxIsFechado = !isFechado;
    const rotate = !proxIsFechado ? "45deg" : "0deg" + ")";
    const visibility = proxIsFechado ? "visible" : "hidden";
    const delay = proxIsFechado ? "0.15s" : "0s";
    const novosEstilos = estilos.slice();
    novosEstilos[0] = {transform: "rotate(-" + rotate};
    novosEstilos[1] = {transitionDelay: delay, visibility: visibility};
    novosEstilos[2] = {transform: "rotate(" + rotate}; 

    setIsFechado(proxIsFechado);
    setEstilos(novosEstilos);
  }
  return (
    <a className="header__menu" onClick={() => {
      handleClick();
      props.cliqueMenu();
    }}>
      <MenuSpan style={estilos[0]}/>
      <MenuSpan style={estilos[1]}/>
      <MenuSpan style={estilos[2]}/>
    </a>
  );
}

export default function Header() {
  const menuInferiorAberto = {
    display: "block",
    padding: "10px 20px",
    borderTop: "solid 1px #cccccc"
  };
  const [menuFechado, setMenuFechado] = useState(true);
  const [displayMenuInferior, setDisplayMenuInferior] = useState({display: "none"});
  const [menuInferior, setMenuInferior] = useState(true);

  function handleClick() {
    let proxDisplay = (displayMenuInferior.display === "block") ? "none" : "block"; 
    setMenuFechado(!menuFechado);
    setDisplayMenuInferior({display : proxDisplay});
    setMenuInferior(!menuInferior);
  }

  return (
    <header className="header">
      <nav className="flex flex-jc-sb flex-ai-c">
        <Link href="/">
          <img alt="Liga de Empreendedorismo da USP" src="img/logo.png" className="header__logo"/>
        </Link>
        <MenuSimbolo cliqueMenu={handleClick}/>
        <MenuLinks />
      </nav>
      <MenuLinks style={displayMenuInferior} classConcat="header__menu__mobile"/>
    </header>
  );
}