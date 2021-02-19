import { faAngleRight, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SelectionProcess() {
  const [cellphone, setCellphone] = useState("");
  
  function onInputChange(cellphoneNumber) {
    const cellNum = cellphoneNumber.replace(/\D+/g, '');
    let novoCellNum = cellNum;
    if (cellphoneNumber.slice(0, 1) !== "+" ) {
      if (novoCellNum.length >= 1)
        novoCellNum = "(" + novoCellNum;
      if (novoCellNum.length >= 3)
        novoCellNum = novoCellNum.slice(0, 3) + ") " + novoCellNum.slice(3, novoCellNum.length);
      if (novoCellNum.length >=10)
        novoCellNum = novoCellNum.slice(0,10) + "-" + novoCellNum.slice(10, novoCellNum.length);
      if (novoCellNum.length == 14)
        novoCellNum = novoCellNum.slice(0, 9) + "-" + novoCellNum.slice(9, 10) + novoCellNum.slice(11, novoCellNum.length);
      if (novoCellNum.length >= 16)
        novoCellNum = novoCellNum.slice(0, 15);
      setCellphone(novoCellNum);
    } 
    else {
      novoCellNum = cellphoneNumber;
      if (novoCellNum.length >= 20) 
        novoCellNum = novoCellNum.slice(0,20)
      setCellphone(novoCellNum);
    } 
  }
  return (
    <section className="selection-process">
      <div className="linhas-divisoria">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Inscreva-se no nosso processo seletivo 2021!</h1>
      <div className="container">
        <form className="selection-process-form">
          <div className="row">
            <div className="col-6 selection-process-form">
              <input
                type="text"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="col-6 selection-process-form">
              <input
                pattern="([+].{0,20}|[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4})"
                type="text"
                placeholder="Digite seu celular"
                onInput={event => onInputChange(event.target.value)}
                value={cellphone}
              />
            </div>
            <div className="row">
              <div className="col-6 selection-process-form">
                <button type="submit">
                  Prosseguir&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronCircleRight} height="28"/>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="selection-process-bg"></div>
    </section>
  );
}

export default SelectionProcess;