import './Corte.css'; // Importa el CSS

const Corte = () => {
  return (
    <div className="corte-container">
      <h1 className="corte-title">Corte: Guía Completa y Detallada</h1>

      {/* Iluminación Requerida */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Condiciones de Iluminación</h2>
        <p className="corte-content">
          De acuerdo con la resolución número 40150 del 03 de mayo de 2024, que forma parte del Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP), se establece que la iluminación localizada requerida al operar la máquina de corte debe ser de 150 lux.
        </p>
        <div className="image-container">
          <img src="/assets/corte-table-image.png" alt="Iluminación adecuada en zona de corte" className="corte-image" />
        </div>
      </section>

      {/* Ambiente térmico */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Ambiente Térmico</h2>
        <p className="corte-content">
          Para evitar molestias térmicas, la temperatura del aire debe estar entre 19 y 26°C, con una humedad relativa entre el 30% y el 60%, y la diferencia de temperatura entre los pies y la cabeza no debe superar los 3°C.
        </p>
        <div className="image-container">
          <img src="/assets/2.2.png" alt="Condiciones térmicas ideales" className="corte-image" />
        </div>
      </section>

      {/* Preparación del Patrón */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Preparación del Patrón</h2>
        <p className="corte-content">
          Primero, es necesario definir el patrón, que puede elaborarse manualmente o digitalmente. Es importante organizar las piezas previamente trazadas antes del corte.
        </p>
        <div className="image-container">
          <img src="/assets/2.9.png" alt="Dibujos de patrones sobre papel" className="corte-image" />
        </div>
      </section>

      {/* Uso del Equipo de Protección Personal */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Elementos de Protección Personal (EPP)</h2>
        <p className="corte-content">
          Es indispensable el uso de guantes de protección mecánica para garantizar la seguridad del operario y prevenir accidentes durante la operación de la máquina de corte.
        </p>
        <div className="image-container">
          <img src="/assets/2.3.png" alt="Equipo de protección personal para corte" className="corte-image" />
        </div>
      </section>

      {/* Extendido de la Tela */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Extendido de la Tela</h2>
        <p className="corte-content">
          El proceso comienza con la extensión de la tela mediante la disposición de sus capas. Es importante evitar posturas inadecuadas para reducir el riesgo de lesiones musculoesqueléticas.
        </p>
        <div className="image-container">
          <img src="/assets/2.5.png" alt="Proceso de extendido de tela" className="corte-image" />
        </div>
      </section>

      {/* Uso de la Máquina Cortadora */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Uso de la Máquina Cortadora</h2>
        <p className="corte-content">
          Con la máquina de corte, se corta la tela en la longitud necesaria para evitar desperdicios. Se colocan capas de tela una sobre otra para combinar diferentes colores y optimizar el trabajo.
        </p>
        <div className="image-container">
          <img src="/assets/2.15.png" alt="Uso de la máquina de corte" className="corte-image" />
        </div>
      </section>

      {/* Corte y Clasificación */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Corte y Clasificación</h2>
        <p className="corte-content">
          Una vez cortadas, las piezas se separan de acuerdo con su talla y se envían al siguiente paso de producción: el proceso de confección.
        </p>
        <div className="image-container">
          <img src="/assets/2.10.png" alt="Clasificación de piezas cortadas" className="corte-image" />
        </div>
      </section>

      {/* Nuevas Secciones Agregadas */}

      {/* Almacenamiento de Telas */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Almacenamiento de Telas</h2>
        <p className="corte-content">
          Es fundamental almacenar las telas en un lugar seco y fresco para evitar daños por humedad o calor excesivo. Las telas deben colocarse en estantes organizados por tipo y color para facilitar su acceso.
        </p>
        <div className="image-container">
          <img src="/assets/2.10.png" alt="Almacenamiento de telas" className="corte-image" />
        </div>
      </section>

      {/* Mantenimiento de la Máquina de Corte */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Mantenimiento de la Máquina de Corte</h2>
        <p className="corte-content">
          Para garantizar el buen funcionamiento de la máquina de corte, es necesario realizar mantenimiento periódico. Esto incluye la lubricación de piezas móviles, la revisión de cuchillas y la limpieza de residuos de tela.
        </p>
        <div className="image-container">
          <img src="/assets/2.11.png" alt="Mantenimiento de la máquina de corte" className="corte-image" />
        </div>
      </section>

      {/* Control de Calidad */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Control de Calidad</h2>
        <p className="corte-content">
          Después del corte, se realiza un control de calidad para verificar que las piezas cumplan con los estándares requeridos. Esto incluye revisar las dimensiones, los bordes y la precisión del corte.
        </p>
        <div className="image-container">
          <img src="/assets/2.12.png" alt="Control de calidad en el corte" className="corte-image" />
        </div>
      </section>

      {/* Optimización de Materiales */}
      <section className="corte-section">
        <h2 className="corte-subtitle">Optimización de Materiales</h2>
        <p className="corte-content">
          Para reducir el desperdicio de tela, se utilizan software de optimización que permiten organizar los patrones de manera eficiente. Esto no solo ahorra material, sino que también reduce costos.
        </p>
        <div className="image-container">
          <img src="/assets/2.13.png" alt="Optimización de materiales" className="corte-image" />
        </div>
      </section>
    </div>
  );
};

export default Corte;