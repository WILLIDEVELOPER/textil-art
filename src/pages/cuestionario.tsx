import QuizComponent from '../components/QuizComponent';
import { sublimationQuestions} from '../data/data'; // Import the questionsimport QuizComponent from '../components/QuizComponent';

import './Cuestionario.css'; // Import the CSS file



const Cuestionario = () => {
  return (
    <div className="cuestionario-container">
      <h1 className="cuestionario-title">Cuestionario</h1>
      <QuizComponent questions={sublimationQuestions} />
      <button className="cuestionario-button">Enviar respuestas</button>
    </div>
  );
};

export default Cuestionario;