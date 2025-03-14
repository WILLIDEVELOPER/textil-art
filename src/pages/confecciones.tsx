import "./Confecciones.css";

const Confeccion = () => {
  return (
    <div className="blog-container">
      <article className="blog-post">
        <h1 className="blog-title">Proceso de Confección</h1>

        <div className="blog-section">
          <p className="blog-text">
            Es fundamental contar con relaciones dimensionales adecuadas, como la altura del asiento, que idealmente debe ser regulable dentro de un rango determinado. 
            La altura óptima dependerá de las medidas de cada persona, pero se recomienda que, para actividades prolongadas, los pies puedan apoyarse completamente en el suelo y las rodillas formen un ángulo de 90 grados. 
            Esto implica tomar como referencia la altura poplítea de cada individuo para garantizar una postura ergonómica y cómoda.
          </p>
          <div className="blog-images">
            <img src="/assets/4.1.png" alt="Relaciones Dimensionales" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            El uso de protectores auditivos es fundamental como parte del equipo de protección personal (EPP) para los operarios en el proceso de confección textil. 
            Durante la producción, las máquinas y herramientas generan niveles de ruido que, con una exposición prolongada, pueden afectar la salud auditiva del trabajador, causando fatiga, estrés e incluso pérdida auditiva a largo plazo. 
            Por ello, el empleo de protectores auditivos ayuda a reducir el impacto del ruido, mejorando las condiciones de trabajo y garantizando la seguridad y el bienestar del operario.
          </p>
          <div className="blog-images">
            <img src="/assets/4.5.png" alt="Protección Auditiva" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            El procedimiento de fabricación textil se inicia con el diseño de las armaduras deportivas, estableciendo así el estilo, los materiales y los detalles. 
            Después se elabora el esquema fundamental que simboliza las partes de la prenda en cuestión como rodilleras, codilleras o alguna otra armadura, y se lleva a cabo el corte de tela, en el que se recortan las piezas de acuerdo al esquema.
          </p>
          <div className="blog-images">
            <img src="/assets/4.4.png" alt="Fabricación Textil" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            A continuación, se lleva a cabo el ensamblaje, que implica coser los componentes y añadir detalles como espuma para protección o correa ajustable. 
            La ropa se examina y se realizan las correcciones requeridas para garantizar el ajuste y el acabado final.
          </p>
          <div className="blog-images">
            <img src="/assets/4.12.png" alt="Proceso de ensamblaje" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Para empezar a usar la máquina de coser se debe colocar la mano en la dirección de la costura y usar el resguardo instalado en ellas para impedir el contacto de la aguja con tu mano. 
            Además, en caso de rotura, evitarás que salga proyectada y pueda causar lesiones.
          </p>
          <div className="blog-images">
            <img src="/assets/4.11.png" alt="Uso de la Máquina de Coser" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Después, se limpia y verifica para asegurar un acabado óptimo, y finalmente se lleva a cabo un control de calidad antes de embalar y distribuir la ropa.
          </p>
          <div className="blog-images">
            <img src="/assets/4.10.png" alt="Control de Calidad" className="blog-image" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Confeccion;
