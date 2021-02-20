import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TeamCards({children, title, members}) {
  const linkedins = {
    Beatriz:    "https://www.linkedin.com/in/ana-beatriz-mazzini-51314a1aa/",
    Diego:      "https://www.linkedin.com/in/diegolobosoares/",
    Eduardo:    "https://www.linkedin.com/in/eduardo-santos-5888b21aa/",
    Felipe:     "https://www.linkedin.com/in/felipe-janowitzer-58a42b1b6/",
    Gabriel:    "https://www.linkedin.com/in/gabriel-braga-francisco-259999178/",
    Guilherme:  "https://www.linkedin.com/in/guilherme-piffer-christo-642959123/",
    João:       "https://www.linkedin.com/in/jo%C3%A3o-biagi-balau-37392b1a1/",
    Joaquiem:   "https://www.linkedin.com/in/joaquim-prado/",
    Luísa:      "https://www.linkedin.com/in/lu%C3%ADsa-perez-yamauchi-baptista-141261191/",
    Raphael:    "https://www.linkedin.com/in/raphael-vila%C3%A7a-8b4a571a3/",
    Vinicius:   "https://www.linkedin.com/in/vinicius-lemos-ab387b185/"
  }
  let imagens = Array(members.length).fill(null);
  for (let i=0; i < members.length; i++) {
    imagens[i] = (
      <div key={"person-" + members[i]} className="team-card-person" id={members[i].toLowerCase()}>
        <p key={"person-" + members[i] + "-p"}>{members[i]}</p>
        <a key={"person-" + members[i] + "-a"}
        href={linkedins[members[i]]} target="_blank">
          <img key={"person-" + members[i] + "-img"} src={"/img/" + "eduardo" + ".png"} />
        </a>

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