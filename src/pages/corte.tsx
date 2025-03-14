import "./Corte.css";

const Corte = () => {
  return (
    <div className="blog-container">
      <article className="blog-post">
        <h1 className="blog-title">Proceso de Corte</h1>

        <div className="blog-section">
          <p className="blog-text">
            De acuerdo con la resolución número 40150 del 03 de mayo de 2024, que forma parte del Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP), se establece que la iluminación localizada requerida al operar la máquina de corte debe ser de 150 lux.
          </p>
          <div className="blog-images">
            <img src="/assets/2.1.png" alt="Iluminación adecuada" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Para evitar molestias térmicas, la temperatura del aire debe estar entre 19 y 26°C, con una humedad relativa entre el 30% y el 60%, y la diferencia de temperatura entre los pies y la cabeza no debe superar los 3°C.
          </p>
          <div className="blog-images">
            <img src="/assets/2.9.png" alt="Condiciones térmicas" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Primero, es necesario definir el patrón, que puede elaborarse manualmente o digitalmente. Es importante organizar las piezas previamente trazadas antes del corte.
          </p>
          <div className="blog-images">
            <img src="/assets/2.3.png" alt="Preparación del patrón" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Es indispensable el uso de guantes de protección mecánica para garantizar la seguridad del operario y prevenir accidentes durante la operación de la máquina de corte.
          </p>
          <div className="blog-images">
            <img src="/assets/2.5.png" alt="EPP para corte" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            El proceso comienza con la extensión de la tela mediante la disposición de sus capas. Es importante evitar posturas inadecuadas para reducir el riesgo de lesiones musculoesqueléticas.
          </p>
          <div className="blog-images">
            <img src="/assets/2.10.png" alt="Extendido de tela" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Con la máquina de corte, se corta la tela en la longitud necesaria para evitar desperdicios. Se colocan capas de tela una sobre otra para combinar diferentes colores y optimizar el trabajo.
          </p>
          <div className="blog-images">
            <img src="/assets/2.11.png" alt="Proceso de corte" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Una vez cortadas, las piezas se separan de acuerdo con su talla y se envían al siguiente paso de producción: el proceso de confección.
          </p>
          <div className="blog-images">
            <img src="/assets/2.12.png" alt="Clasificación de piezas" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Es fundamental almacenar las telas en un lugar seco y fresco para evitar daños por humedad o calor excesivo. Las telas deben colocarse en estantes organizados por tipo y color para facilitar su acceso.
          </p>
          <div className="blog-images">
            <img src="/assets/2.13.png" alt="Almacenamiento" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Para garantizar el buen funcionamiento de la máquina de corte, es necesario realizar mantenimiento periódico. Esto incluye la lubricación de piezas móviles, la revisión de cuchillas y la limpieza de residuos de tela.
          </p>
          <div className="blog-images">
            <img src="/assets/2.8.png" alt="Mantenimiento" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Después del corte, se realiza un control de calidad para verificar que las piezas cumplan con los estándares requeridos. Esto incluye revisar las dimensiones, los bordes y la precisión del corte.
          </p>
          <div className="blog-images">
            <img src="/assets/2.15.png" alt="Control de calidad" className="blog-image" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Corte;