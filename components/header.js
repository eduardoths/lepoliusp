import Link from 'next/link';
import { useEffect, useState } from 'react';

function MenuSpan(props) {
  return <span style={props.style}></span>
}

function MenuLinks(props) {
  let classConcat = props.classConcat;
  if (classConcat === undefined)
    classConcat = "";
  return (
    <div onClick={props.onClick} style={props.style} className={classConcat}>
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
  return (
    <a className="header__menu" onClick={props.cliqueMenu}>
      <MenuSpan style={props.estilos[0]}/>
      <MenuSpan style={props.estilos[1]}/>
      <MenuSpan style={props.estilos[2]}/>
    </a>
  );
}

export default function Header() {
  const [menuFechado, setMenuFechado] = useState(true);
  const [displayMenuInferior, setDisplayMenuInferior] = useState({top: "-500px"});
  const [menuInferior, setMenuInferior] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [estilos, setEstilos] = useState(Array(3).fill(null));

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 104);
    setPrevScrollPos(currentScrollPos);
  }

  function handleClick() {
    let proxTop = (!menuFechado) ? "-500px" : "84px";
    setMenuFechado(!menuFechado);
    setDisplayMenuInferior({top: proxTop});
    setMenuInferior(!menuInferior);
  }
  
  function handleClickMenu () {
    const proxIsFechado = !menuFechado;
    const rotate = !proxIsFechado ? "45deg" : "0deg" + ")";
    const visibility = proxIsFechado ? "visible" : "hidden";
    const delay = proxIsFechado ? "0.15s" : "0s";
    const position = proxIsFechado ? "inherit" : "absolute";
    const top = proxIsFechado ? "0" : "2.5px";
    const bottom = proxIsFechado ? "0" : "2.5px";
    const novosEstilos = estilos.slice();
    novosEstilos[0] = {transform: "rotate(-" + rotate, position: position, top: top, left: 0};
    novosEstilos[1] = {transitionDelay: delay, visibility: visibility};
    novosEstilos[2] = {transform: "rotate(" + rotate, position: position, bottom: bottom, left: 0}; 

    setMenuFechado(proxIsFechado);
    setEstilos(novosEstilos);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);  
  return (
    <>
      <header className="header" id="header" style={{top: visible ? "0px" : "-104px"}}>
        <nav className="flex flex-jc-sb flex-ai-c">
          <Link href="/">
            <img alt="Liga de Empreendedorismo da USP" src="img/logo.png" className="header__logo"/>
          </Link>
          <MenuSimbolo estilos={estilos} cliqueMenu={() => {handleClick(), handleClickMenu()}}/>
          <MenuLinks classConcat="header__links"/>
        </nav>
      </header>
      <MenuLinks style={{top: !visible ? "-500px" : displayMenuInferior.top}} classConcat="header__menu__mobile" onClick={() => {handleClick(), handleClickMenu()}}/>
    </>
  );
}