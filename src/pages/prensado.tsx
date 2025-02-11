import './Prensado.css'; // Importa el CSS

const Prensado = () => {
  return (
    <div className="prensado-container">
      <h1 className="prensado-title">Prensado: Proceso y Recomendaciones</h1>

      {/* Elementos de Protección Personal */}
      <section className="prensado-section">
        <h2 className="prensado-subtitle">Elementos de Protección Personal (EPP)</h2>
        <p className="prensado-content">
          Antes de iniciar el proceso de prensado, es importante utilizar el equipo de protección personal adecuado para evitar accidentes. Se recomienda el uso de:
        </p>
        <ul className="prensado-list">
          <li><strong>Guantes térmicos:</strong> Protegen las manos del calor generado por la máquina.</li>
          <li><strong>Gafas de seguridad:</strong> Evitan que partículas de pegamento o residuos lleguen a los ojos.</li>
        </ul>
      </section>

      {/* Preparación del Proceso */}
      <section className="prensado-section">
        <h2 className="prensado-subtitle">Preparación del Proceso</h2>
        <p className="prensado-content">
          Para iniciar, asegúrate de que la máquina esté apagada. Luego, sigue estos pasos para preparar el prensado:
        </p>
        <ol className="prensado-steps">
          <li>Saca la bandeja de la prensa con cuidado.</li>
          <li>Coloca sobre la bandeja las piezas acolchonadas que deseas adherir a la tela.</li>
          <li>Usa un spray con pegamento para rociar las piezas uniformemente hasta que queden bien impregnadas.</li>
          <li>Coloca un filamento textil especial sobre la parte humedecida, el cual reaccionará con el calor para adherirse firmemente a la tela.</li>
          <li>Coloca la tela sobre el filamento textil y verifica que esté alineada correctamente.</li>
        </ol>
      </section>

      {/* Proceso de Prensado */}
      <section className="prensado-section">
        <h2 className="prensado-subtitle">Realización del Prensado</h2>
        <p className="prensado-content">
          Una vez preparada la bandeja, introduce la bandeja en la máquina siguiendo estas recomendaciones:
        </p>
        <ul className="prensado-list">
          <li>Empuja la bandeja con cuidado, asegurándote de no tener los dedos dentro de la bandeja.</li>
          <li>Activa la máquina y deja que el proceso de prensado ocurra durante aproximadamente <strong>20 segundos</strong>.</li>
        </ul>
      </section>

      {/* Finalización del Proceso */}
      <section className="prensado-section">
        <h2 className="prensado-subtitle">Finalización del Proceso</h2>
        <p className="prensado-content">
          Una vez completado el tiempo de prensado:
        </p>
        <ol className="prensado-steps">
          <li>Apaga la máquina y saca la bandeja con cuidado.</li>
          <li>Retira las piezas terminadas y verifica que las uniones sean firmes.</li>
        </ol>
        <p className="prensado-content">
          De esta forma, habrás finalizado el proceso de prensado de manera eficiente y segura.
        </p>
      </section>
    </div>
  );
};

export default Prensado;
