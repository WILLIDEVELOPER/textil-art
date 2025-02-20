import "./Prensado.css"; // Importa el CSS

const Prensado = () => {
  return (
    <div className="prensado-container">
      <h1 className="prensado-title">Proceso de Prensado</h1>

      <section className="prensado-section">
        <p className="prensado-content">
          Para iniciar el proceso de prensado, es fundamental utilizar guantes
          térmicos como EPP para protegerse del calor.
        </p>
        <div className="image-container">
          <img
            src="/assets/3.1.png"
            alt="Guantes térmicos"
            className="prensado-image"
          />
        </div>
      </section>

      <section className="prensado-section">
        <p className="prensado-content">
          Preparación de la máquina: Con la máquina apagada, extrae la bandeja
          de la prensa y coloca sobre ella las piezas acolchonadas que se desean
          adherir a la tela.
        </p>
        <div className="image-container">
          <img
            src="/assets/3.3.png"
            alt="Preparación de la máquina"
            className="prensado-image"
          />
        </div>
      </section>

      <section className="prensado-section">
        <p className="prensado-content">
          Aplicación del pegamento: Utiliza un spray con pegamento especial para
          telas, teniendo en cuenta rociar las piezas de manera uniforme hasta
          que estén completamente impregnadas.
        </p>
        <div className="image-container">
          <img
            src="/assets/3.4.png"
            alt="Aplicación del pegamento"
            className="prensado-image"
          />
          <img
            src="/assets/3.7.png"
            alt="Aplicación del pegamento"
            className="prensado-image"
          />
        </div>
      </section>

      <section className="prensado-section">
        <p className="prensado-content">
          Colocación del filamento textil: Sobre la parte humedecida por el
          pegamento, coloca un filamento textil especial que reaccionará con el
          calor para unir firmemente el material con la tela que se colocará
          posteriormente.
        </p>
        <div className="image-container">
          <img
            src="/assets/3.8.png"
            alt="Colocación del filamento textil"
            className="prensado-image"
          />
        </div>
      </section>

      <section className="prensado-section">
        <p className="prensado-content">
          Prensado: Introduce la bandeja nuevamente en la prensa empujándola,
          con mucha precaución de no poner las manos dentro de la bandeja y
          comienza el proceso de prensado, el cual durará aproximadamente 20
          segundos.
        </p>
        <div className="image-container">
          <img
            src="/assets/3.9.png"
            alt="Proceso de prensado"
            className="prensado-image"
          />
        </div>
      </section>

      <section className="prensado-section">
        <p className="prensado-content">
          Manejo de la bandeja: Asegúrate de empujar la bandeja con cuidado,
          evitando tener los dedos dentro de la bandeja para prevenir
          accidentes.
        </p>
        <div className="image-container">
          <img
            src="/assets/3.10.png"
            alt="Manejo de la bandeja"
            className="prensado-image"
          />
          <img
            src="/assets/3.11.png"
            alt="Finalización del proceso"
            className="prensado-image"
          />
          <img
            src="/assets/3.12.png"
            alt="Finalización del proceso"
            className="prensado-image"
          />
        </div>
      </section>

      <section className="prensado-section">
        <p className="prensado-content">
          Finalización: Una vez transcurrido el tiempo, retira la bandeja con
          cuidado y saca las piezas prensadas.
        </p>

        <div className="image-container">
          <img
            src="/assets/3.16.png"
            alt="Manejo de la bandeja"
            className="prensado-image"
          />
          <img
            src="/assets/3.17.png"
            alt="Manejo de la bandeja"
            className="prensado-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Prensado;