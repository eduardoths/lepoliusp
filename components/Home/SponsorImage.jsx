import Fade from 'react-reveal/Fade'

function SponsorImage (props) {
  return (
    <div className="sponsors-logo">
      <Fade bottom big>
        <a href={props.href} target="_blank">
          <img src={props.src} className="sponsors-logo-img"/>
        </a>
      </Fade>
    </div>
  );
}

export default SponsorImage;