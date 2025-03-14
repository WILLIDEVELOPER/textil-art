// Remove useEffect since it's not being used
import { useState } from "react";
import { useQuizStore } from "../store/quizStore";
import { Question } from "../data/data";
import "./quizcomponent.css";

const QuizComponent = ({ questions }: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showPresentation, setShowPresentation] = useState(true);
  const { addAnswer, score } = useQuizStore();

  const handlePresentationContinue = () => {
    setShowPresentation(false);
  };

  const handleAnswer = (answer: string) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setShowFeedback(true);

    addAnswer(questions[currentQuestion].question, {
      question: questions[currentQuestion].question,
      userAnswer: answer,
      correctAnswer: questions[currentQuestion].correctAnswer,
      isCorrect: correct
    });
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer("");
    setShowPresentation(true);
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
          <div className="score-circle">
            <p className="score-text">{score}/{questions.length}</p>
            <p className="score-percentage">{percentage.toFixed(1)}%</p>
          </div>
          <p className="score-message">{message}</p>
          <div className="score-details">
            <p>Respuestas correctas: {score}</p>
            <p>Respuestas incorrectas: {questions.length - score}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="progress-bar" 
               style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
          <span className="question-counter">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
        </div>
        <div className="score-indicator">
          Puntaje actual: {score}/{currentQuestion + 1}
        </div>
      </div>

      <div className="question-section">
        {!showFeedback ? (
          <>
            {questions[currentQuestion].presentationImage && (
              <div className="presentation-container">
                <img
                  src={questions[currentQuestion].presentationImage}
                  alt="Presentación de la pregunta"
                  className="presentation-image"
                />
              </div>
            )}
            <h3 className="question-text">{questions[currentQuestion].question}</h3>
            <div className="options-grid">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="feedback">
            <div className="feedback-content">
              <img
                src={isCorrect ? questions[currentQuestion].correctImage : questions[currentQuestion].incorrectImage}
                alt={isCorrect ? "Correcto" : "Incorrecto"}
                className="feedback-image"
              />
              <p className={`feedback-text ${isCorrect ? "correct" : "incorrect"}`}>
                {isCorrect ? "¡Correcto!" : "Incorrecto"}
              </p>
              <p className="feedback-explanation">
                {isCorrect ? questions[currentQuestion].feedbackCorrect : questions[currentQuestion].feedbackIncorrect}
              </p>
              {!isCorrect && (
                <p className="correct-answer">
                  Respuesta correcta: {questions[currentQuestion].correctAnswer}
                </p>
              )}
              <button onClick={nextQuestion} className="next-button">
                {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
