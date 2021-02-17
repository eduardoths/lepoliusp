function FormInput(props) {
  return (
    <div className={"col-" + props.col + " contato-input"}>
      <label> {props.nome}
        {props.textarea ? <textarea type={props.type}></textarea>: <input type={props.type} />}
      </label>
    </div>
  );
}

function ContatoForm() {
  return (
    <form method="POST">
      <div className="row">
        <FormInput col="6" nome="Nome" type="text" textarea={false} />
        <FormInput col="6" nome="Sobrenome" type="text" textarea={false} />
      </div>
      <div className="row">
        <FormInput col="12" nome="Email" type="email" textarea={false} />
      </div>
      <div className="row">
        <FormInput col="12" nome="Mensagem" type="text" textarea={true} />
      </div>
      <div className="row">
        <div className="col-12 contato-input">
          <button type="submit">Enviar</button>
        </div>
      </div>
    </form>
  );
}

export default ContatoForm;