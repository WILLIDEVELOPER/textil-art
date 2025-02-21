import "./Sublimacion.css"; // Importa el CSS

const Sublimacion = () => {
  return (
    <div className="sublimacion-container">
      <h1 className="sublimacion-title">Proceso de Sublimación</h1>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Antes de iniciar el proceso de sublimación, que consiste en transferir
          un diseño a la tela mediante una prensa, es necesario utilizar los
          equipos de protección personal (EPP) correspondientes, como guantes
          térmicos, para evitar quemaduras.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.2.png"
            alt="Guantes térmicos"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Preparación inicial: Con la prensa apagada, ajusta el nivel de presión
          necesario utilizando la manija de presión.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.5.png"
            alt="Ajustando presión"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Configuración de la prensa: Enciende la prensa. Coloca el producto
          textil con la parte a sublimar mirando hacia arriba, asegurándote de
          que la tela esté bien estirada y sin arrugas, ya que cualquier pliegue
          podría afectar el proceso.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.6.png"
            alt="Prensa lista"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Ajuste de parámetros: En la pantalla de la prensa, ajusta la
          temperatura a 200°C y el tiempo a 60 segundos.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.7.png"
            alt="Configurando temperatura"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Colocación del papel sublimado: Coloca el papel sublimado sobre la
          tela y fija su posición con cinta térmica. La cinta térmica es
          esencial, ya que está diseñada para soportar altas temperaturas; el
          uso de otro tipo de cinta puede dañar tanto el material como la
          maquinaria.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.8.png"
            alt="Colocando papel"
            className="sublimacion-image"
          />
          <img
            src="/assets/1.9.png"
            alt="Colocando papel2"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Prensado: Baja la prensa, iniciando el conteo del tiempo.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.10.png"
            alt="Bajando prensa"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Cuando el tiempo haya transcurrido, se activará una alarma que indica
          que el proceso ha finalizado.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.11.png"
            alt="Proceso de prensado"
            className="sublimacion-image"
          />
        </div>
      </section>

      <section className="sublimacion-section">
        <p className="sublimacion-content">
          Levanta la prensa con cuidado, retira el papel y la prenda, siempre
          teniendo precaución, ya que la prensa estará caliente.
        </p>
        <div className="sublimacion-image-container">
          <img
            src="/assets/1.12.png"
            alt="Prensa abierta"
            className="sublimacion-image"
          />
          <img
            src="/assets/1.14.png"
            alt="Prensa abierta2"
            className="sublimacion-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Sublimacion;
