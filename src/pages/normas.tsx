import "./Normas.css";

const Normas = () => {
  return (
    <div className="blog-container">
      <article className="blog-post">
        <h1 className="blog-title">Normas Técnicas</h1>

        <div className="blog-section">
          <h2 className="blog-subtitle">Norma NTC 5693-1</h2>
          <p className="blog-text">
            La norma NTC 5693-1 se encarga de dar a conocer la Ergonomía y manipulación manual en el Levantamiento y desplazamiento teniendo en cuenta, respectivamente, la intensidad, la frecuencia y la duración de la tarea. Suministra orientación en la identificación y evaluación de factores de riesgo que comúnmente se asocian con la manipulación manual de cargas livianas a alta frecuencia, de ese modo permite la evaluación de los riesgos relacionados para la salud de la población trabajadora.
          </p>
          <div className="blog-images">
            <img src="/assets/Imagen-Extra-A.jpg" alt="Norma NTC 5693-1" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <h2 className="blog-subtitle">Norma ISO 11228</h2>
          <p className="blog-text">
            La norma ISO 11228 aborda aspectos relacionados con la seguridad y ergonomía en el manejo manual de cargas, ayudando a prevenir lesiones y promover un trabajo seguro. Esta norma se centra en proporcionar directrices sobre cómo manejar cargas manualmente de manera segura, con énfasis en la ergonomía para prevenir riesgos.
          </p>
          <div className="blog-images">
            <img src="/assets/extra-b.jpg" alt="Norma ISO 11228" className="blog-image" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Normas;