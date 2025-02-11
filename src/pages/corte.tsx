import './Corte.css'; // Importa el CSS

const Corte = () => {
  return (
    <div className="corte-container">
      <h1 className="corte-title">Corte: Guía Completa y Detallada</h1>

      {/* Introducción */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Importancia del Proceso de Corte</h2>
        <p className="corte-content">
          El proceso de corte es una etapa fundamental en la confección, ya que asegura la precisión y optimización de los materiales. Un corte adecuado mejora la calidad del producto final y reduce desperdicios, mientras se protege la salud del operario.
        </p>
      </section>

      {/* Condiciones de Iluminación */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Condiciones de Iluminación</h2>
        <p className="corte-content">
          Asegúrate de trabajar en un entorno bien iluminado para evitar esfuerzos innecesarios en la visión. Una iluminación clara y uniforme reduce errores en el corte y aumenta la seguridad del operario.
        </p>
      </section>

      {/* Preparación del Patrón */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Preparación del Patrón</h2>
        <p className="corte-content">
          Define si el patrón será manual o digital y organiza las piezas trazadas en papel o archivo digital. Esto permite mantener un flujo de trabajo ordenado y eficiente.
        </p>
        <ul className="corte-list">
          <li>Selecciona los diseños requeridos para el corte.</li>
          <li>Separa los patrones según tallas o modelos.</li>
          <li>Asegúrate de que los trazos estén claramente definidos.</li>
        </ul>
      </section>

      {/* Uso del Equipo de Protección Personal */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Elementos de Protección Personal (EPP)</h2>
        <p className="corte-content">
          Protege al operario durante el corte usando equipo adecuado:
        </p>
        <ul className="corte-list">
          <li>Guantes anticorte para evitar lesiones en las manos.</li>
          <li>Gafas de seguridad para proteger los ojos de partículas.</li>
          <li>Zapatos antideslizantes para prevenir accidentes.</li>
        </ul>
      </section>

      {/* Extendido de la Tela */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Extendido de la Tela</h2>
        <p className="corte-content">
          Para realizar cortes en grandes cantidades, extiende las telas en capas. Asegúrate de alinear las capas correctamente para evitar imperfecciones en las piezas.
        </p>
        <ul className="corte-list">
          <li>Coloca cada capa de tela con cuidado.</li>
          <li>Evita arrugas o desplazamientos en las capas.</li>
          <li>Manipula los rollos de tela adoptando posturas adecuadas.</li>
        </ul>
      </section>

      {/* Uso de la Máquina Cortadora */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Uso de la Máquina Cortadora</h2>
        <p className="corte-content">
          La máquina cortadora es una herramienta clave para realizar cortes precisos. Sigue estos pasos:
        </p>
        <ol className="corte-steps">
          <li>Coloca el patrón sobre las capas de tela y fíjalo con alfileres o pesos.</li>
          <li>Sigue el contorno del patrón con la máquina cortadora.</li>
          <li>Ajusta la velocidad y presión de la máquina según el grosor de las telas.</li>
        </ol>
      </section>

      {/* Clasificación y Envío */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Clasificación y Envío</h2>
        <p className="corte-content">
          Una vez cortadas las piezas, clasifícalas según talla o diseño y prepáralas para el proceso de confección. Este paso asegura un flujo continuo en la línea de producción.
        </p>
      </section>
    </div>
  );
};

export default Corte;
