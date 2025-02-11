import { useState } from "react";
import { Question } from "../data/data";
import './quizcomponent.css'; // Import the CSS file

const QuizComponent = ({ questions }: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswer = (answer: string) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="quiz-container">
      {!showFeedback ? (
        <>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options-grid">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)}>
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
          />
          <p>
            {isCorrect
              ? questions[currentQuestion].feedbackCorrect
              : `${questions[currentQuestion].feedbackIncorrect} La respuesta correcta es: ${questions[currentQuestion].correctAnswer}`}
          </p>
          <button onClick={nextQuestion}>
            {currentQuestion < questions.length - 1 ? "Siguiente" : "Finalizar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;