import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TeamCards({children, title, members}) {
  let imagens = Array(members.length).fill(null);
  for (let i=0; i < members.length; i++) {
    imagens[i] = (
      <div className="team-card-person">
        <p>{members[i]}</p>
        <img src={"/img/" + "eduardo" + ".png"} id={members[i].toLowerCase()}/>
      </div>
    )
  }

  return (
    <div className="team-card">
      <div className="team-card-text">
        <h1>{title}</h1>
        <FontAwesomeIcon icon={faAngleDoubleDown} width="35"/>
        <p>{children}</p>
      </div>
      <div className="team-card-images">
        {imagens}
      </div>
    </div>
  );
}