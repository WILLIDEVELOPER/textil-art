import './Confecciones.css'; // Importa el CSS

const Confeccion = () => {
  return (
    <div className="confeccion-container">
      <h1 className="confeccion-title">Confección: Proceso y Recomendaciones</h1>

      {/* Elementos de Protección Personal */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Protección Auditiva</h2>
        <p className="confeccion-content">
          Es importante utilizar los protectores auditivos como un EPP para el operario de este proceso, protegiendo los oídos de ruidos fuertes que pueden afectar la salud auditiva.
        </p>
      </section>

      {/* Procedimiento de Fabricación Textil */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Procedimiento de Fabricación Textil</h2>
        <p className="confeccion-content">
          El procedimiento de fabricación textil se inicia con el diseño de las armaduras deportivas, estableciendo así el estilo, los materiales y los detalles.
        </p>
        <p className="confeccion-content">
          A continuación, se elabora el esquema fundamental que simboliza las partes de la prenda en cuestión como rodilleras, codilleras o alguna otra armadura, y se lleva a cabo el corte de tela, en el que se recortan las piezas de acuerdo al esquema.
        </p>
        <p className="confeccion-content">
          El siguiente paso es el ensamblaje, que implica coser los componentes y añadir detalles como espuma para protección o correa ajustable. La ropa se examina y se realizan las correcciones necesarias para garantizar el ajuste y el acabado final.
        </p>
      </section>

      {/* Uso de la Máquina de Coser */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Uso de la Máquina de Coser</h2>
        <p className="confeccion-content">
          Para comenzar a usar la máquina de coser, se debe colocar la mano en la dirección de la costura. Usa el resguardo instalado en ellas para impedir el contacto de la aguja con tu mano y, en caso de rotura, evitar que salga proyectada y cause lesiones.
        </p>
      </section>

      {/* Limpieza y Control de Calidad */}
      <section className="confeccion-section">
        <h2 className="confeccion-subtitle">Limpieza y Control de Calidad</h2>
        <p className="confeccion-content">
          Después de terminar el proceso de confección, se debe limpiar y verificar la máquina para asegurar un acabado óptimo. Finalmente, se realiza un control de calidad antes de embalar y distribuir la ropa.
        </p>
      </section>
    </div>
  );
};

export default Confeccion;
