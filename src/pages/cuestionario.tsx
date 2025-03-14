import { useState, useEffect } from "react";
import { useQuizStore } from "../store/quizStore";
import emailjs from "emailjs-com";
import "./Cuestionario.css";
import QuizComponent from "../components/QuizComponent";
import {
  cuttingQuestions,
  pressingQuestions,
  sewingQuestions,
  sublimationQuestions,
} from "../data/data";

interface Submission {
  score: number;
  date: string;
}

const allQuestions = [
  ...cuttingQuestions,
  ...pressingQuestions,
  ...sublimationQuestions,
  ...sewingQuestions,
];

const Cuestionario = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [existingSubmission, setExistingSubmission] = useState<Submission | null>(null);
  const { email, setEmail, answers, score, resetQuiz } = useQuizStore();

  const SERVICE_ID = "service_xnv2ec7";
  const TEMPLATE_ID = "template_alatjum";

  useEffect(() => {
    if (email) {
      const submission = useQuizStore.getState().submissions[email];
      if (submission) {
        setExistingSubmission(submission);
      }
    }
  }, [email]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedEmail = inputEmail.toLowerCase().trim();
    
    const storedData = localStorage.getItem("quiz-storage");
    if (storedData) {
      const submissions = JSON.parse(storedData).state.submissions;
      if (submissions[formattedEmail]) {
        setExistingSubmission(submissions[formattedEmail]);
        alert("Ya existe un cuestionario enviado con este correo");
        return;
      }
    }
    setEmail(formattedEmail);
  };

  const handleFinalSubmit = async () => {
    try {
      const answersArray = Object.values(answers);
      if (answersArray.length < allQuestions.length) {
        alert("Por favor responde todas las preguntas antes de enviar");
        return;
      }

      const answersForEmail = answersArray.map(a => 
        `Pregunta: ${a.question}\n` +
        `Tu respuesta: ${a.userAnswer}\n` +
        `Respuesta correcta: ${a.correctAnswer}\n` +
        `Resultado: ${a.isCorrect ? '✓ Correcto' : '✗ Incorrecto'}\n`
      ).join('\n');

      const templateParams = {
        from_name: "Sistema de Cuestionarios",
        subject: "Resultados del Cuestionario",
        score,
        total: allQuestions.length,
        percentage: ((score / allQuestions.length) * 100).toFixed(2),
        date: new Date().toLocaleString(),
        user_email: email,
        answers: answersForEmail
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, "6hAb2DwKeryHH41uE");

      const submission = {
        email,
        score,
        date: new Date().toISOString(),
        answers: answersArray,
        totalQuestions: allQuestions.length
      };

      // Update localStorage and state
      useQuizStore.setState((state) => ({
        submissions: {
          ...state.submissions,
          [email]: submission,
        },
      }));

      alert(
        `¡Cuestionario enviado exitosamente!\n` +
        `Puntaje: ${score}/${allQuestions.length} ` +
        `(${((score/allQuestions.length)*100).toFixed(2)}%)\n` +
        `Revisa tu correo para ver los detalles.`
      );

      resetQuiz();
      setInputEmail("");
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar el cuestionario. Por favor, intenta nuevamente.");
    }
  };

  if (!email) {
    return (
      <div className="blog-container">
        <div className="blog-post">
          <h1 className="blog-title">Cuestionario de Evaluación</h1>
          <div className="email-form">
            <h2>Ingresa tu correo electrónico para comenzar</h2>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                required
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="email-input"
              />
              {existingSubmission ? (
                <div className="submission-info">
                  <p>
                    Ya completaste este cuestionario el{" "}
                    {new Date(existingSubmission.date).toLocaleDateString()}
                  </p>
                  <p>
                    Puntaje obtenido: {existingSubmission.score}/
                    {allQuestions.length} (
                    {(
                      (existingSubmission.score / allQuestions.length) *
                      100
                    ).toFixed(2)}
                    %)
                  </p>
                </div>
              ) : (
                <button type="submit" className="start-button">
                  Comenzar Evaluación
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-post">
        <h1 className="blog-title">Cuestionario de Evaluación</h1>
        <QuizComponent questions={allQuestions} />
        <button className="submit-button" onClick={handleFinalSubmit}>
          Finalizar y Enviar Respuestas
        </button>
      </div>
    </div>
  );
};

export default Cuestionario;
