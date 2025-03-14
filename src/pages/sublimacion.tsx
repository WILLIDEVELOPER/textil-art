import "./Sublimacion.css";

const Sublimacion = () => {
  return (
    <div className="blog-container">
      <article className="blog-post">
        <h1 className="blog-title">Proceso de Sublimación</h1>

        <div className="blog-section">
          <p className="blog-text">
            Con el diseño impreso en el papel para sublimar, se procede a realizar este proceso
          </p>
          <div className="blog-images">
            <img src="/assets/1.1.png" alt="Inicio del proceso" className="blog-image" />
            <img src="/assets/1.2.png" alt="Preparación" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Antes de iniciar el proceso de sublimación, que consiste en transferir
            un diseño a la tela mediante una prensa, es necesario utilizar los
            equipos de protección personal (EPP) correspondientes, como guantes
            térmicos, para evitar quemaduras.
          </p>
          <div className="blog-images">
            <img src="/assets/1.4.png" alt="EPP necesarios" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Preparación inicial: Con la prensa apagada, ajusta el nivel de presión
            necesario utilizando la manija de presión.
          </p>
          <div className="blog-images">
            <img src="/assets/1.5.png" alt="Ajuste de presión" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Configuración de la prensa: Enciende la prensa. Coloca el producto
            textil con la parte a sublimar mirando hacia arriba, asegurándote de
            que la tela esté bien estirada y sin arrugas, ya que cualquier pliegue
            podría afectar el proceso.
          </p>
          <div className="blog-images">
            <img src="/assets/1.6.png" alt="Configuración inicial" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Ajuste de parámetros: En la pantalla de la prensa, ajusta la
            temperatura a 200°C y el tiempo a 60 segundos.
          </p>
          <div className="blog-images">
            <img src="/assets/1.7.png" alt="Ajuste de parámetros" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Colocación del papel sublimado: Coloca el papel sublimado sobre la
            tela y fija su posición con cinta térmica. La cinta térmica es
            esencial, ya que está diseñada para soportar altas temperaturas; el
            uso de otro tipo de cinta puede dañar tanto el material como la
            maquinaria.
          </p>
          <div className="blog-images">
            <img src="/assets/1.8.png" alt="Colocación papel 1" className="blog-image" />
            <img src="/assets/1.9.png" alt="Colocación papel 2" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Prensado: Baja la prensa, iniciando el conteo del tiempo.
          </p>
          <div className="blog-images">
            <img src="/assets/1.10.png" alt="Inicio prensado" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Cuando el tiempo haya transcurrido, se activará una alarma que indica
            que el proceso ha finalizado.
          </p>
          <div className="blog-images">
            <img src="/assets/1.11.png" alt="Finalización tiempo" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Espera 10 segundos para que la prensa baje un poco su temperatura
          </p>
          <div className="blog-images">
            <img src="/assets/1.13.png" alt="Tiempo de espera" className="blog-image" />
          </div>
        </div>

        <div className="blog-section">
          <p className="blog-text">
            Levanta la prensa con cuidado, retira el papel y la prenda, siempre
            teniendo precaución, ya que la prensa estará aún un poco caliente.
          </p>
          <div className="blog-images">
            <img src="/assets/1.12.png" alt="Retiro prenda 1" className="blog-image" />
            <img src="/assets/1.14.png" alt="Retiro prenda 2" className="blog-image" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Sublimacion;
