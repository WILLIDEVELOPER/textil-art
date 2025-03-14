import "./Prensado.css";

const Prensado = () => {
  return (
    <div className="blog-container">
      <article className="blog-post">
        <h1 className="blog-title">Proceso de Prensado</h1>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.1.png"
              alt="Guantes térmicos"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Para iniciar el proceso de prensado, es fundamental utilizar guantes
            térmicos como EPP para protegerse del calor.
          </p>
        </div>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.3.png"
              alt="Preparación inicial"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Preparación de la máquina: Con la máquina apagada, extrae la bandeja
            de la prensa y coloca sobre ella las piezas acolchadas que se desean
            adherir a la tela.
          </p>
        </div>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.6.png"
              alt="Aplicación pegamento 1"
              className="blog-image"
            />
            <img
              src="/assets/3.7.png"
              alt="Aplicación pegamento 2"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Aplicación del pegamento: Utiliza un spray con pegamento especial
            para telas, teniendo en cuenta rociar las piezas de manera uniforme
            hasta que estén completamente impregnadas.
          </p>
        </div>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.8.png"
              alt="Colocación filamento"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Colocación del filamento textil: Sobre la parte humedecida por el
            pegamento, coloca un filamento textil especial que reaccionará con
            el calor para unir firmemente el material con la tela que se
            colocará posteriormente.
          </p>
        </div>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.9.png"
              alt="Inicio prensado"
              className="blog-image"
            />
            <img
              src="/assets/3.10.png"
              alt="Proceso prensado"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Prensado: Introduce la bandeja nuevamente en la prensa empujándola,
            con mucha precaución de no poner las manos dentro de la bandeja y
            comienza el proceso de prensado, el cual durará aproximadamente 20
            segundos.
          </p>
        </div>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.11.png"
              alt="Manejo bandeja"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Manejo de la bandeja: Asegúrate de empujar la bandeja con cuidado,
            evitando tener los dedos dentro de la bandeja para prevenir
            accidentes.
          </p>
        </div>

        <div className="blog-section">
          <div className="blog-images">
            <img
              src="/assets/3.12.png"
              alt="Finalización proceso"
              className="blog-image"
            />
          </div>
          <p className="blog-text">
            Finalización: Una vez transcurrido el tiempo, retira la bandeja con
            cuidado y saca las piezas prensadas.
          </p>
          <div className="blog-images">
            <img
              src="/assets/3.16.png"
              alt="Retiro piezas 1"
              className="blog-image"
            />
            <img
              src="/assets/3.17.png"
              alt="Retiro piezas 2"
              className="blog-image"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Prensado;
