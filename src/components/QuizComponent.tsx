import { useState } from "react";
import { useQuizStore } from "../store/quizStore"; // Importar el store
import { Question } from "../data/data";
import "./quizcomponent.css";

const QuizComponent = ({ questions }: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const { addAnswer, setScore, score } = useQuizStore(); // Obtener funciones del store

  const handleAnswer = (answer: string) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setShowFeedback(true);
    console.log(selectedAnswer);

    addAnswer(questions[currentQuestion].question, answer); // Guardar la respuesta en el store

    if (correct) {
      setScore(score + 1); // Aumentar puntaje en el store
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  if (currentQuestion >= questions.length) {
    const percentage = (score / questions.length) * 100;
    let message = "";

    if (percentage >= 90) message = "¡Excelente trabajo! 🎉";
    else if (percentage >= 70) message = "¡Buen trabajo! 😊";
    else if (percentage >= 50) message = "Puedes mejorar 💪";
    else message = "Sigue practicando 📚";

    return (
      <div className="results-container">
        <h2>Resultados Finales</h2>
        <div className="score-card">
          <p className="score-text">
            {score}/{questions.length}
          </p>
          <p className="score-percentage">({percentage.toFixed(1)}%)</p>
          <p className="score-message">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {!showFeedback ? (
        <>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options-grid">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="feedback">
          <img
            src={
              isCorrect
                ? questions[currentQuestion].correctImage
                : questions[currentQuestion].incorrectImage
            }
            alt={isCorrect ? "Correcto" : "Incorrecto"}
            className="feedback-image"
          />
          <p className="feedback-text">
            {isCorrect
              ? questions[currentQuestion].feedbackCorrect
              : `${questions[currentQuestion].feedbackIncorrect} La respuesta correcta es: ${questions[currentQuestion].correctAnswer}`}
          </p>
          <button onClick={nextQuestion} className="next-button">
            {currentQuestion < questions.length - 1
              ? "Siguiente →"
              : "Ver resultados"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
