import './Confecciones.css'; // Importa el CSS

const Confeccion = () => {
  return (
    <div className="confeccion-container">
      <h1 className="confeccion-title">Confección: Proceso y Recomendaciones</h1>

      {/* Relaciones Dimensionales */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Relaciones Dimensionales</h2>
        <img src="/assets/4.1.png" alt="Relaciones Dimensionales" className="confeccion-image" />
        <p className="confeccion-content">
          Es fundamental contar con relaciones dimensionales adecuadas, como la altura del asiento, que idealmente debe ser regulable dentro de un rango determinado. 
          La altura óptima dependerá de las medidas de cada persona, pero se recomienda que, para actividades prolongadas, los pies puedan apoyarse completamente en el suelo y las rodillas formen un ángulo de 90 grados. 
          Esto implica tomar como referencia la altura poplítea de cada individuo para garantizar una postura ergonómica y cómoda.
        </p>
      </section>

      {/* Protección Auditiva */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Protección Auditiva</h2>
        <img src="/assets/4.5.png" alt="Protección Auditiva" className="confeccion-image" />
        <p className="confeccion-content">
          El uso de protectores auditivos es fundamental como parte del equipo de protección personal (EPP) para los operarios en el proceso de confección textil. 
          Durante la producción, las máquinas y herramientas generan niveles de ruido que, con una exposición prolongada, pueden afectar la salud auditiva del trabajador, causando fatiga, estrés e incluso pérdida auditiva a largo plazo. 
          Por ello, el empleo de protectores auditivos ayuda a reducir el impacto del ruido, mejorando las condiciones de trabajo y garantizando la seguridad y el bienestar del operario.
        </p>
      </section>

      {/* Procedimiento de Fabricación Textil */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Procedimiento de Fabricación Textil</h2>
        <img src="/assets/4.4.png" alt="Fabricación Textil" className="confeccion-image" />
        <p className="confeccion-content">
          El procedimiento de fabricación textil se inicia con el diseño de las armaduras deportivas, estableciendo así el estilo, los materiales y los detalles. 
          Después se elabora el esquema fundamental que simboliza las partes de la prenda en cuestión como rodilleras, codilleras o alguna otra armadura, y se lleva a cabo el corte de tela, en el que se recortan las piezas de acuerdo al esquema.
        </p>
        <img src="/assets/4.12.png" alt="Fabricación Textil" className="confeccion-image" />
        <p className="confeccion-content">
          A continuación, se lleva a cabo el ensamblaje, que implica coser los componentes y añadir detalles como espuma para protección o correa ajustable. 
          La ropa se examina y se realizan las correcciones requeridas para garantizar el ajuste y el acabado final.
        </p>
      </section>

      {/* Uso de la Máquina de Coser */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Uso de la Máquina de Coser</h2>
        <img src="/assets/4.11.png" alt="Uso de la Máquina de Coser" className="confeccion-image" />
        <p className="confeccion-content">
          Para empezar a usar la máquina de coser se debe colocar la mano en la dirección de la costura y usar el resguardo instalado en ellas para impedir el contacto de la aguja con tu mano. 
          Además, en caso de rotura, evitarás que salga proyectada y pueda causar lesiones.
        </p>
      </section>

      {/* Limpieza y Control de Calidad */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Limpieza y Control de Calidad</h2>
        <img src="/assets/4.10.png" alt="Control de Calidad" className="confeccion-image" />
        <p className="confeccion-content">
          Después, se limpia y verifica para asegurar un acabado óptimo, y finalmente se lleva a cabo un control de calidad antes de embalar y distribuir la ropa.
        </p>
      </section>
    </div>
  );
};

export default Confeccion;
