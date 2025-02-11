import './Sublimacion.css'; // Importa el CSS

const Sublimacion = () => {
  return (
    <div className="sublimacion-container">
      <h1 className="sublimacion-title">Sublimación: Guía Completa y Detallada</h1>

      {/* Introducción */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">¿Qué es la Sublimación?</h2>
        <p className="sublimacion-content">
          La sublimación es una técnica de impresión que utiliza calor y presión para transferir un diseño a superficies específicas, como telas, cerámicas o metales recubiertos. Es un método altamente duradero que permite obtener colores vivos y resultados de alta calidad. 
        </p>
        <p className="sublimacion-content">
          Este proceso es ampliamente utilizado en la personalización de productos como camisetas, tazas, gorras y más, lo que lo convierte en una opción ideal para empresas y emprendedores.
        </p>
      </section>

      {/* Elementos de Protección Personal */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">Elementos de Protección Personal (EPP)</h2>
        {/* <img
          src="https://i.ibb.co/svb9MzP/sublimacion-jpg-600.jpg"
          alt="Guantes térmicos"
          className="sublimacion-image"
        /> */}
        <p className="sublimacion-content">
          Durante el proceso de sublimación, el equipo de protección personal es esencial para evitar accidentes. Los guantes térmicos protegen las manos del calor extremo generado por la prensa. Además, es recomendable usar gafas de seguridad y trabajar en un área bien ventilada para minimizar la exposición a los vapores.
        </p>
      </section>

      {/* Configuración de la Prensa */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">Configuración Inicial de la Prensa Térmica</h2>
        <p className="sublimacion-content">
          Antes de comenzar el proceso de sublimación, es crucial configurar la prensa correctamente para evitar errores en la transferencia. 
        </p>
        <ul className="sublimacion-list">
          <li>Ajusta la presión utilizando la manija de la prensa. La presión debe ser moderada, asegurando contacto uniforme con la tela.</li>
          <li>Configura la temperatura a <strong>200°C</strong> y el tiempo a <strong>60 segundos</strong>, valores estándar para la sublimación en poliéster.</li>
          <li>Asegúrate de que la tela esté bien extendida y libre de arrugas. Las arrugas pueden causar imperfecciones en el diseño transferido.</li>
        </ul>
      </section>

      {/* Materiales Necesarios */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">Materiales Necesarios para Sublimación</h2>
        <p className="sublimacion-content">
          Para obtener resultados de alta calidad, necesitarás los siguientes materiales y herramientas:
        </p>
        <ul className="sublimacion-list">
          <li><strong>Papel de Sublimación:</strong> Especialmente diseñado para retener tinta y transferirla con precisión.</li>
          <li><strong>Tinta de Sublimación:</strong> Formulada para convertir el diseño impreso en gas bajo calor.</li>
          <li><strong>Prensa Térmica:</strong> Herramienta clave para aplicar calor y presión en el proceso.</li>
          <li><strong>Cinta Térmica:</strong> Utilizada para fijar el papel al material y evitar movimientos.</li>
        </ul>
      </section>

      {/* Pasos para la Sublimación */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">Pasos Detallados para la Sublimación</h2>
        <ol className="sublimacion-steps">
          <li>Imprime el diseño deseado en el papel de sublimación utilizando tinta especial.</li>
          <li>Coloca la tela sobre la base de la prensa, asegurándote de que esté completamente extendida.</li>
          <li>Fija el papel sublimado con la cinta térmica, asegurando que no se desplace durante el prensado.</li>
          <li>Baja la prensa y asegúrate de que la temperatura y el tiempo estén configurados correctamente.</li>
          <li>Espera a que el temporizador finalice y retira cuidadosamente el papel para revelar el diseño.</li>
        </ol>
      </section>

      {/* Tipos de Materiales Sublimables */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">Materiales Ideales para Sublimación</h2>
        <p className="sublimacion-content">
          La sublimación funciona mejor en superficies de poliéster o con un recubrimiento especial. Algunos ejemplos incluyen:
        </p>
        <ul className="sublimacion-list">
          <li><strong>Textiles:</strong> Camisetas, bolsas y bandanas de poliéster.</li>
          <li><strong>Artículos rígidos:</strong> Tazas, placas metálicas y rompecabezas con recubrimiento sublimable.</li>
          <li><strong>Accesorios:</strong> Gorras y estuches para dispositivos.</li>
        </ul>
      </section>

      {/* Consejos y Trucos */}
      <section className="sublimacion-section">
        <h2 className="sublimacion-subtitle">Consejos para Sublimadores Principiantes</h2>
        <p className="sublimacion-content">
          Si estás comenzando en el mundo de la sublimación, ten en cuenta estos consejos:
        </p>
        <ul className="sublimacion-list">
          <li>Realiza pruebas en materiales de bajo costo antes de trabajar en proyectos importantes.</li>
          <li>Siempre limpia la superficie del material antes de colocar el papel sublimado.</li>
          <li>Evita el uso de telas oscuras, ya que la sublimación no es opaca y los colores pueden no ser visibles.</li>
        </ul>
      </section>
    </div>
  );
};

export default Sublimacion;
