export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  correctImage: string; // Imagen para respuesta correcta
  incorrectImage: string; // Imagen para respuesta incorrecta
  feedbackCorrect: string; // Retroalimentación positiva
  feedbackIncorrect: string; // Retroalimentación negativa
}

export const sublimationQuestions: Question[] = [
  {
    question:
      "El primer paso para iniciar con la sublimación es imprimir en papel el diseño a estampar Antes de iniciar con cualquier proceso industrial, es necesario hacer uso de las medidas de seguridad preventivas para la realización de cada labor, En el caso del proceso de sublimación el cual es un proceso en el que por medio de una prensa se transfiere un diseño en la tela para la posterior confección. Se debe hacer uso de elementos de protección personal. 1) ¿Cuál o cuáles serían los recomendados para esta operación?:",
    options: [
      "Colocarse guantes impermeables.",
      "Colocarse guantes de tela.",
      "Colocarse guantes quirúrgicos.",
      "Colocarse los guantes térmicos.",
    ],
    correctAnswer: "Colocarse los guantes térmicos.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! El uso de guantes térmicos es fundamental en el proceso de sublimación, ya que permite proteger las manos del operario ante las altas temperaturas de la prensa. Aplicar las medidas de seguridad adecuadas ayuda a prevenir accidentes laborales. ¡Gran trabajo!",
    feedbackIncorrect:
      "❌ Incorrecto. Los guantes impermeables, de tela o quirúrgicos no ofrecen la protección necesaria contra el calor generado en la sublimación. Para esta tarea, lo más seguro es usar guantes térmicos, ya que ayudan a prevenir quemaduras. Recuerda siempre elegir el EPP adecuado para cada proceso. ¡Sigue aprendiendo!",
  },
  //... resto de preguntas con mismos campos
];

//cutting questions:
export const cuttingQuestions: Question[] = [
  {
    question:
      "¿Cuál es valor correcto de la iluminación localizada que se debe tener al usar la máquina de corte?",
    options: ["100 luxes", "120 luxes", "50 luxes", "150 luxes"],
    correctAnswer: "150 luxes",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Lo estás haciendo muy bien; De acuerdo con la resolución número 40150 del 03 de mayo de 2024, que forma parte del Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP), se establece que la iluminación localizada requerida al operar la máquina de corte debe ser de 150 lux.",
    feedbackIncorrect:
      "❌ Incorrecto. Si la fábrica estuviera al aire libre estos luxes serian adecuados; Ya que según la resolución número 40150 del 03 de mayo de 2024, que forma parte del Reglamento Técnico de Iluminación y Alumbrado Público (RETILAP), se establece que la iluminación localizada requerida al operar la máquina de corte debe ser de 150 lux.",
  },
  {
    question:
      "¿Cuál de los EPP es el indispensable para empezar con el uso de la máquina de corte a lo largo del rollo de tela?",
    options: [
      "Colocarse guantes impermeables.",
      "Guantes de protección mecánica.",
      "Colocarse guantes quirúrgicos.",
      "Colocarse los guantes térmicos.",
    ],
    correctAnswer: "Guantes de protección mecánica.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Muy buen trabajo; El uso de guantes de protección mecánica es esencial para garantizar la seguridad del operario y prevenir accidentes durante la operación de la máquina de corte. Debido a que estos guantes están diseñados para mantener la destreza y la sensibilidad necesarias, lo que permite un manejo seguro y eficiente del equipo.",
    feedbackIncorrect:
      "❌ Incorrecto. No creo que protegerse de la humedad sea lo mejor para este proceso; El uso de otro tipo de guantes diferentes a los guantes de protección mecánica pueden causar lesiones graves si se presenta un posible accidente como laceraciones que pueden ocurrir al manipular la máquina o el material durante el proceso de corte.",
  },
  {
    question:
      "¿Qué medidas es la más adecuada para disminuir el riesgo de una lesión musculoesquelética en el proceso de corte?",
    options: [
      "Usar una mesa de trabajo de cualquier tamaño como soporte.",
      "Ajustar la altura adecuada de la máquina para el operario.",
      "Mantener una misma posición de trabajo.",
      "Realizar la labor continuamente.",
    ],
    correctAnswer: "Ajustar la altura adecuada de la máquina para el operario.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Felicitaciones, sigue así; esto reduce significativamente el riesgo de lesiones relacionadas con posturas incorrectas al evitar posturas forzadas y movimientos repetitivos; se minimiza la probabilidad de sufrir lesiones asociadas al trabajo, garantizando así un entorno laboral más seguro y saludable.",
    feedbackIncorrect:
      "❌ Incorrecto. Esta decisión puede provocarme una lesión; La medida más adecuada es ajustar la altura de la máquina para el operario. Esto es clave porque permite al trabajador mantener una postura ergonómica, lo que minimiza el esfuerzo excesivo y la tensión en la espalda, cuello y otras partes del cuerpo.",
  },
  {
    question:
      "¿Qué norma internacional contiene la información del correcto Manejo Manual de Cargas?",
    options: [
      "Las Normas ISO 11228",
      "Las Normas ISO 13485",
      "Las Normas ISO 20121",
      "Las Normas ISO 4217",
    ],
    correctAnswer: "Las Normas ISO 11228",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Gran trabajo; La norma escogida se centra en proporcionar directrices sobre cómo manejar cargas manualmente de manera segura, con énfasis en la ergonomía para prevenir riesgos. La norma ISO 11228 aborda aspectos relacionados con la seguridad y ergonomía en el manejo manual de cargas, ayudando a prevenir lesiones y promover un trabajo seguro.",
    feedbackIncorrect:
      "❌ Incorrecto. La opción seleccionada no corresponde a la norma que regula el manejo manual de cargas. Recuerda que la norma correcta proporciona directrices sobre seguridad y ergonomía para prevenir lesiones en el trabajo. ¡Inténtalo de nuevo!",
  },
  //... resto de preguntas con mismos campos
];

//pressingQuestions
export const pressingQuestions: Question[] = [
  {
    question:
      "Ahora necesito tu ayuda en el proceso de prensado. Espero que hayas estudiado bien y me cuides de todos los riesgos laborales. Confió en ti. Ya sabes que antes de realizar cualquier tarea es necesario hacer un correcto uso de los elementos de protección personal (EPP). Así que, para iniciar un proceso como el prensado, qué tipos de elementos de protección personal (EPP) son recomendados utilizar.",
    options: [
      "Casco industrial.",
      "Tapa oídos.",
      "Guantes térmicos.",
      "Todas las anteriores.",
    ],
    correctAnswer: "Guantes térmicos.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Los guantes térmicos son esenciales en el proceso de prensado, ya que protegen las manos del operario contra posibles quemaduras debido a las altas temperaturas. Usar el EPP adecuado es clave para garantizar la seguridad en el trabajo. ¡Bien hecho!",
    feedbackIncorrect:
      "❌ Incorrecto. En el proceso de prensado, el principal riesgo es el contacto con superficies calientes, por lo que el uso de guantes térmicos es fundamental para prevenir quemaduras. Recuerda siempre elegir el EPP adecuado según la tarea a realizar. ¡Sigue adelante!",
  },
  {
    question:
      "Con la máquina apagada se saca la bandeja de la prensa. Se colocan sobre ella las piezas acolchonadas que se requieren adherir a la pieza de tela, Luego con un spray con pegamento se rocían las piezas uniformemente por arriba hasta que queden bien impregnadas de pegamento para este proceso qué tipo de pegamento se debe utilizar:",
    options: [
      "Pegamento amarillo para una alta fijación.",
      "Pegamento liquido instantáneo",
      "Pegamento especial para telas",
      "Silicona liquida",
    ],
    correctAnswer: "Pegamento especial para telas",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! El pegamento especial para telas es el más adecuado para este proceso, ya que permite una adhesión fuerte y de buena calidad, asegurando que las piezas acolchonadas se fijen correctamente a la tela. Usar los materiales correctos garantiza un mejor resultado en el trabajo. ¡Bien hecho!",
    feedbackIncorrect:
      "❌ Incorrecto. Para este proceso, es fundamental utilizar pegamento especial para telas, ya que otros tipos de adhesivos pueden no ofrecer la fijación adecuada o afectar la calidad del producto. Elegir los materiales correctos es clave para obtener un buen resultado. ¡Sigue intentándolo!",
  },
  {
    question:
      "luego se coloca un filamento textil especial sobre la parte humedecida anteriormente, esta reacciona con el calor para que se unan firmemente Con la tela que se pone posteriormente encima de ella. Finalmente se mete la bandeja nuevamente Al momento de meter la bandeja para el prensado se debe hacer de la siguiente forma:",
    options: [
      "Sosteniendo la bandeja por arriba para obtener una correcta fijación.",
      "Empujar la bandeja teniendo cuidado de no tener los dedos dentro de la bandeja.",
      "Tomar la temperatura con los dedos mojados antes de insertar la bandeja.",
      "No hay una forma correcta, lo importante es que se inserte con las piezas completas.",
    ],
    correctAnswer:
      "Empujar la bandeja teniendo cuidado de no tener los dedos dentro de la bandeja.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Empujar la bandeja teniendo cuidado de no tener los dedos dentro es la mejor forma de evitar accidentes. La prensa funciona con calor y presión, por lo que es fundamental mantener las manos fuera del área de riesgo para prevenir atrapamientos o quemaduras. ¡Excelente trabajo!",
    feedbackIncorrect:
      "❌ Incorrecto. Insertar la bandeja de manera segura es clave para evitar lesiones. Nunca debes poner las manos dentro de la prensa ni tomar la temperatura con los dedos mojados, ya que esto puede causar quemaduras o atrapamientos. La forma correcta es empujar la bandeja con precaución. ¡Sigue aprendiendo y priorizando la seguridad!",
  },
  {
    question:
      "De esta manera el proceso de prensado termina en un tiempo aproximado de 20 segundos. Una vez pasado este tiempo se saca la bandeja y se retiran las piezas terminadas. ¿Cuál es la temperatura del aire según el reglamento sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo?",
    options: [
      "de 14°C a 25°C.",
      "de 10°C a 16°C.",
      "de 15°C a 30°C.",
      "de 27°C a 30°C.",
    ],
    correctAnswer: "de 14°C a 25°C.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Según el reglamento sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo, la temperatura adecuada debe estar entre 14°C y 25°C. Mantener un ambiente dentro de este rango es clave para garantizar la comodidad y el bienestar de los trabajadores. ¡Bien hecho!",
    feedbackIncorrect:
      "❌ Incorrecto. La temperatura en los lugares de trabajo debe estar entre 14°C y 25°C para garantizar condiciones óptimas de seguridad y salud. Un ambiente demasiado frío o caluroso puede afectar el bienestar y desempeño de los trabajadores. ¡Sigue aprendiendo y cuidando tu seguridad!",
  },
  //... resto de preguntas con mismos campos
];

//sewingQuestions
export const sewingQuestions: Question[] = [
  {
    question: "¿Cuál o cuáles serían los recomendados para esta operación?",
    options: [
      "Colocarse guantes impermeables.",
      "Colocarse guantes de tela.",
      "Colocarse guantes quirúrgicos.",
      "Colocarse los guantes térmicos.",
    ],
    correctAnswer: "Colocarse los guantes térmicos.",
    correctImage: "/correcto.gif",
    incorrectImage: "/error.jpg",
    feedbackCorrect:
      "✅ Correcto! Los guantes térmicos protegen contra el calor de la prensa",
    feedbackIncorrect:
      "❌ Incorrecto. Solo los guantes térmicos protegen adecuadamente contra altas temperaturas",
  },
  //... resto de preguntas con mismos campos
];
