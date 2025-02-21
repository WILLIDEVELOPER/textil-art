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
  const [existingSubmission, setExistingSubmission] =
    useState<Submission | null>(null);
  const { email, setEmail, reset } = useQuizStore();

  // Configuración de EmailJS
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

    // Verificar en localStorage si ya existe un cuestionario con este email
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
      const { score, answers } = useQuizStore.getState();

      const templateParams = {
        to_email: email,
        from_name: "Sistema de Cuestionarios",
        subject: `Resultados del Cuestionario`,
        score,
        total: allQuestions.length,
        date: new Date().toLocaleString(),
      };

      console.log("Datos enviados:", templateParams);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        "6hAb2DwKeryHH41uE"
      );

      // Guardar el resultado en localStorage
      const storedData = localStorage.getItem("quiz-storage");
      const submissions = storedData
        ? JSON.parse(storedData).state.submissions
        : {};

      const newSubmission = {
        email,
        score,
        date: new Date().toISOString(),
        answers,
      };

      submissions[email] = newSubmission;

      localStorage.setItem(
        "quiz-storage",
        JSON.stringify({ state: { submissions } })
      );

      // 🔹 Actualizar el estado de existingSubmission ANTES de resetear
      setExistingSubmission(newSubmission);

      alert("Cuestionario enviado exitosamente");

      // 🔹 Usar un setTimeout para resetear después de actualizar el estado
      setTimeout(() => {
        reset();
      }, 100); // Esperar un breve tiempo antes de resetear
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar el cuestionario");
    }
  };

  if (!email) {
    return (
      <div className="email-container">
        <h2>Ingresa tu correo electrónico</h2>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            required
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
          />

          {/* Mostrar alerta si ya respondió y ocultar el botón */}
          {existingSubmission ? (
            <div className="existing-submission">
              <p>
                Ya existe un cuestionario enviado con este correo el{" "}
                {new Date(existingSubmission.date).toLocaleDateString()}
              </p>
              <p>
                Puntaje: {existingSubmission.score}/{allQuestions.length}
              </p>
            </div>
          ) : (
            <button type="submit">Continuar</button>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="cuestionario-container">
      <h1 className="cuestionario-title">Cuestionario</h1>
      <QuizComponent questions={allQuestions} />
      <button className="cuestionario-button" onClick={handleFinalSubmit}>
        Enviar respuestas
      </button>
    </div>
  );
};

export default Cuestionario;
