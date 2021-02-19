
export default function CultureCards({title, children, image}) {
  return (
    <div className="culture-card">
      <h2>{title}</h2>
      <p>{children}</p>
      <img src={image}/>
    </div>
  );
}