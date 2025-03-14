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
      "El primer paso para iniciar con la sublimación es imprimir en papel el diseño a estampar Antes de iniciar con cualquier proceso industrial, es necesario hacer uso de las medidas de seguridad preventivas para la realización de cada labor, En el caso del proceso de sublimación el cual es un proceso en el que por medio de una prensa se transfiere un diseño en la tela para la posterior confección. Se debe hacer uso de elementos de protección personal.) ¿Cuál o cuáles serían los recomendados para esta operación?:",
    options: [
      "Colocarse guantes impermeables.",
      "Colocarse guantes de tela.",
      "Colocarse guantes quirúrgicos.",
      "Colocarse los guantes térmicos.",
    ],
    correctAnswer: "Colocarse los guantes térmicos.",
    correctImage: "/assets/1.3.png",
    incorrectImage: "/assets/1.17.png",
    feedbackCorrect:
      "✅ Correcto! El uso de guantes térmicos es fundamental en el proceso de sublimación, ya que permite proteger las manos del operario ante las altas temperaturas de la prensa. Aplicar las medidas de seguridad adecuadas ayuda a prevenir accidentes laborales. ¡Gran trabajo!",
    feedbackIncorrect:
      "❌ Incorrecto. Los guantes impermeables, de tela o quirúrgicos no ofrecen la protección necesaria contra el calor generado en la sublimación. Para esta tarea, lo más seguro es usar guantes térmicos, ya que ayudan a prevenir quemaduras. Recuerda siempre elegir el EPP adecuado para cada proceso. ¡Sigue aprendiendo!",
  },
  {
    question:
      " Ahora, con la prensa apagada aun, ¿Cuál es el siguiente paso para continuar con el proceso?",
    options: [
      "Se coloca papel sublimado en la prensa.",
      "Se gradúa el nivel de presión necesario (con la manija de presión)",
      "Se gradúa la temperatura.",
      "Colocar cinta térmica a la tela",
    ],
    correctAnswer:
      "Se gradúa el nivel de presión necesario (con la manija de presión)",
    correctImage: "/assets/1.5.png",
    incorrectImage: "/assets/1.17.png",
    feedbackCorrect:
      "✅ Correcto! Graduar la presión es el siguiente paso adecuado en el proceso de sublimación. Ajustar correctamente este parámetro es clave para lograr una transferencia óptima del diseño a la tela. Prestar atención a cada detalle del proceso garantiza un mejor resultado. ¡Bien hecho!",
    feedbackIncorrect:
      "❌ Incorrecto. Antes de continuar con el proceso de sublimación, es fundamental ajustar la presión de la prensa, ya que este factor influye en la calidad del estampado. Otras acciones, como colocar el papel sublimado o ajustar la temperatura, deben hacerse en etapas posteriores. ¡Sigue aprendiendo y poniendo atención a los pasos correctos!",
  },
  {
    question:
      "Ahora enciende y se abre la prensa, se coloca el producto textil con la parte que se desea sublimar mirando hacia arriba, se expande bien la tela para que no cuente con ninguna arruga, ya que esto puede afectar el proceso. la pantalla muestra dos datos, el de arriba es la temperatura y el de abajo es el tiempo, se gradúan los valores (Temperatura a 200°C y tiempo en 60s). ¿Cuál es el siguiente paso a seguir?",
    options: [
      "Se pone el papel sublimado sobre la tela y se fija con cinta de enmascarar.",
      "Se pone el papel sublimado sobre la tela y se fija con cauchos.",
      "Se pone el papel sublimado sobre la tela y se fija con cinta térmica.",
      "Se pone el papel sublimado sobre la tela y se fija con cinta aislante.",
    ],
    correctAnswer:
      "Se pone el papel sublimado sobre la tela y se fija con cinta térmica.",
    correctImage: "/assets/1.8.png",
    incorrectImage: "/assets/1.17.png",
    feedbackCorrect:
      "✅ Correcto! Fijar el papel sublimado con cinta térmica es la mejor opción, ya que esta cinta está diseñada para soportar altas temperaturas sin afectar el material ni la maquinaria. Usar el material adecuado garantiza un proceso seguro y un resultado de calidad. ¡Excelente trabajo!",
    feedbackIncorrect:
      "❌ Incorrecto. Usar una cinta inadecuada puede generar problemas en el proceso, como daños en el material, en la maquinaria o incluso riesgos de incendio. La opción correcta es usar cinta térmica, ya que está diseñada específicamente para resistir el calor de la sublimación. ¡Recuerda siempre elegir los materiales adecuados para cada tarea!",
  },
  {
    question:
      "Cuando este bien fijado todo, se baja la prensa, el tiempo se empieza a descontar Y cuando el proceso termina suena una alarma que es la que nos informa que el proceso finalizó y podemos levantar la prensa  ¿Cuál es el procedimiento más adecuado a seguir una vez finalizado la sublimación?",
    options: [
      "Retirar la tela inmediatamente para que no se quede pegada en la prensa.",
      "Esperar 10 segundos que es el tiempo en el que la prensa se enfría.",
      "Se gradúa la temperatura nuevamente para que no se queme la prenda.",
      "Se establece el tiempo en el contador para que no se exceda el tiempo requerido.",
    ],
    correctAnswer:
      "Esperar 10 segundos que es el tiempo en el que la prensa se enfría.",
    correctImage: "/assets/1.13.png",
    incorrectImage: "/assets/1.11.png",
    feedbackCorrect:
      "✅ Correcto! Esperar unos segundos antes de retirar la tela es la mejor decisión, ya que permite que la temperatura de la prensa disminuya, reduciendo el riesgo de quemaduras. Aunque los guantes térmicos ofrecen protección, siempre es recomendable tomar precauciones adicionales. ¡Bien hecho, seguimos garantizando seguridad en cada paso!",
    feedbackIncorrect:
      "❌ Incorrecto. Retirar la tela inmediatamente o hacer ajustes innecesarios en la temperatura pueden generar riesgos como quemaduras o errores en el proceso. La mejor opción es esperar unos segundos para permitir que la prensa se enfríe, asegurando un manejo seguro del material sublimado. ¡Recuerda siempre priorizar la seguridad en cada tarea!",
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
    correctImage: "/assets/2.2.png",
    incorrectImage: "/assets/2.1.png",
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
    correctImage: "/assets/2.5.png",
    incorrectImage: "/assets/2.4.png",
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
    correctImage: "/assets/2.8.png",
    incorrectImage: "/assets/2.7.png",
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
    correctImage: "/assets/2.14.png",
    incorrectImage: "/assets/2.4.png",
    feedbackCorrect:
      "✅ Correcto! Gran trabajo; La norma escogida se centra en proporcionar directrices sobre cómo manejar cargas manualmente de manera segura, con énfasis en la ergonomía para prevenir riesgos. La norma ISO 11228 aborda aspectos relacionados con la seguridad y ergonomía en el manejo manual de cargas, ayudando a prevenir lesiones y promover un trabajo seguro.",
    feedbackIncorrect:
      "❌ Incorrecto. La opción seleccionada no corresponde a la norma que regula el manejo manual de cargas. Recuerda que la norma correcta proporciona directrices sobre seguridad y ergonomía para prevenir lesiones en el trabajo. ¡Inténtalo de nuevo!",
  },
  {
    question:
      "¿Cuál es la norma NTC que especifica los limites recomendados para el levantamiento y transporte manual teniendo en cuenta, respectivamente, la intensidad, la frecuencia y la duración de la tarea?",
    options: ["NTC 5693-1", "NTC 5655", "NTC 5693-2", "NTC 5723"],
    correctAnswer: "NTC 5693-1",
    correctImage: "/assets/Imagen-Extra-A.jpg",
    incorrectImage: "/assets/Imagen-Extra-B.jpg",
    feedbackCorrect:
      "✅ Correcto! ¡Bien hecho! La NTC 5693-1 es la norma que aborda la ergonomía y la manipulación manual en el levantamiento y desplazamiento de cargas, considerando la intensidad, la frecuencia y la duración de la tarea. Esta norma es clave para establecer límites seguros y reducir el riesgo de lesiones en el trabajo.",
    feedbackIncorrect:
      "❌ Incorrecto. Incorrecto. La norma seleccionada no aborda específicamente los límites recomendados para el levantamiento y transporte manual de cargas. Asegúrate de revisar la normativa adecuada, ya que una correcta aplicación de estos principios es clave para prevenir lesiones y garantizar la seguridad en el trabajo. ¡Inténtalo de nuevo!",
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
    correctImage: "/assets/3.1.png",
    incorrectImage: "/assets/3.5.png",
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
    correctImage: "/assets/3.7.png",
    incorrectImage: "/assets/3.8.png",
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
    correctImage: "/assets/3.11.png",
    incorrectImage: "/assets/3.14.png",
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
    correctAnswer: "de 19°C a 26°C.",
    correctImage: "/assets/3.16.png",
    incorrectImage: "/assets/3.17.png",
    feedbackCorrect:
      "✅ Correcto! Según el reglamento sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo la temperatura correcta para estos espacios es de 19°C a 26°C.",
    feedbackIncorrect:
      "❌ Incorrecto. Según el reglamento sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo la temperatura correcta para estos espacios es de 19°C a 26°C.",
  },
  //... resto de preguntas con mismos campos
];

//sewingQuestions
export const sewingQuestions: Question[] = [
  {
    question:
      "Cuál es correcto valor de la iluminación localizada que se debe tener al usar la máquina del proceso de confección",
    options: ["100 luxes", "120 luxes", "50 luxes", "150 luxes"],
    correctAnswer: "150 luxes",
    correctImage: "/assets/4.7.png",
    incorrectImage: "/assets/4.8.png",
    feedbackCorrect:
      "✅ Correcto! ¡Bien hecho! La iluminación localizada para operar la máquina de confección debe ser de 150 lux, según la resolución 40150 de 2024 del RETILAP.",
    feedbackIncorrect:
      "❌ Incorrecto. Para operar la máquina de confección, se requieren 150 lux, según la resolución 40150 de 2024 del RETILAP.",
  },
  {
    question:
      " ¿de qué tipo debe ser la luz localizada para el proceso de confección?",
    options: [
      "Luz cálida de 2700K - 3000K",
      "Luz neutra de 4000K - 4500K",
      "Luz fría de 5000K - 6500K",
      "Luz natural sin regulación",
    ],
    correctAnswer: "Luz fría de 5000K - 6500K",
    correctImage: "/assets/4.9C.png",
    incorrectImage: "/assets/4.9A.png",
    feedbackCorrect:
      "✅ Correcto! ¡Bien hecho! Para el proceso de confección, la iluminación más adecuada es la luz fría de 5000K - 6500K, ya que proporciona mayor claridad, reduce la fatiga visual y mejora la precisión en los detalles. Según las normativas de iluminación industrial, este tipo de luz es ideal para tareas que requieren alta concentración y exactitud.",
    feedbackIncorrect:
      "❌ Incorrecto. La luz más adecuada para el proceso de confección es la luz fría de 5000K - 6500K, ya que mejora la visibilidad y reduce el cansancio ocular. Otros tipos de luz, como la cálida o la neutra, pueden generar sombras o disminuir la percepción de los detalles, afectando la calidad del trabajo. ¡Sigue adelante y aprende de este error!",
  },
  {
    question:
      "¿cuáles son las recomendaciones para un puesto de trabajo que se desempeña sentado?",
    options: [
      "El asiento debe poder girarse sobre su propio eje, se debe contar con un asiento reclinable sin que se pueda calibrar la altura del mismo.",
      "El asiento debe contar con reposamuñecas para que el operario puede reclinar sus brazos, la mesa debajo no debe contar con espacio para que el operario mantenga su postura de trabajo de forma rígida.",
      "El asiento debe ser graduable en su altura y contar con espaldar, además se debe contar con espacio bajo la mesa para estirar los pies, a su vez el asiento debe contar con 5 ruedas para su estabilidad y que él operario adopte una postura adecuada.",
      " El asiento no debe contar con espaldar para que el operario adopte una posición propicia para ejercer su labor también es recomendable poseer 3 ruedas para que se tenga una estabilidad propicia.",
    ],
    correctAnswer:
      "El asiento debe ser graduable en su altura y contar con espaldar, además se debe contar con espacio bajo la mesa para estirar los pies, a su vez el asiento debe contar con 5 ruedas para su estabilidad y que él operario adopte una postura adecuada.",
    correctImage: "/assets/4.3.png",
    incorrectImage: "/assets/4.2.png",
    feedbackCorrect:
      "✅ Correcto! Un asiento ajustable, con espaldar y espacio para los pies, asegura una postura cómoda y ergonómica.",
    feedbackIncorrect:
      "❌ Incorrecto.  Un buen asiento debe ser ajustable, con espaldar y estabilidad para evitar posturas incómodas.",
  },
  {
    question:
      "¿qué elemento de protección personal son más recomendables para laborar en el proceso de confección?  ",
    options: [
      "dedal y protectores auditivos de tapón.",
      "gafas de laboratorio y bata.",
      "guantes impermeables y bota punta de acero.",
      "chaleco reflectivo y dedal.",
    ],
    correctAnswer: "dedal y protectores auditivos de tapón.",
    correctImage: "/assets/4.5.png",
    incorrectImage: "/assets/4.6.png",
    feedbackCorrect:
      "✅ Correcto! El dedal protege los dedos de laceraciones y los protectores auditivos reducen el impacto del ruido.",
    feedbackIncorrect:
      "❌ Incorrecto. En confección, se necesita dedal y protectores auditivos para seguridad. Otros equipos son para riesgos distintos.",
  },
  {
    question:
      "¿Cuál es la disposición de tiempo correcta entre trabajo continuo de confección textil y pausa activa?",
    options: [
      "cuarenta minutos de trabajo continuo y veinte minutos de pausa activa. Incorrecto, una pausa tan larga no es acorde con el tiempo trabajado.",
      "una hora de trabajo continuo y cinco minutos de pausa activa. Correcto, esta disposición de tiempo es la ideal",
      "dos horas de trabajo continuo y cinco minutos de pausa activa. Incorrecto. Es mucho tiempo continuo de trabajo para tan poco tiempo de pausa activa.",
      "una hora de trabajo continuo y treinta minutos de pausa activa. Incorrecto, una pausa tan larga no es acorde con el tiempo trabajado.",
    ],
    correctAnswer:
      "una hora de trabajo continuo y cinco minutos de pausa activa. Correcto, esta disposición de tiempo es la ideal",
    correctImage: "/assets/CORRECCION.png",
    incorrectImage: "/assets/4.12.png",
    feedbackCorrect:
      "✅ Correcto! La disposición de tiempo ideal en la confección textil es una hora de trabajo continuo seguida de 5 minutos de pausa activa. Esto ayuda a prevenir problemas circulatorios y mejora la ergonomía del operario",
    feedbackIncorrect:
      "❌ Incorrecto. Incorrecto. La distribución del tiempo entre trabajo continuo y pausa activa es fundamental para prevenir problemas circulatorios y mejorar la ergonomía del operario. Es importante realizar pausas activas de 5 minutos por cada hora de trabajo para reducir la fatiga y mejorar el bienestar en el entorno laboral. ¡Inténtalo de nuevo!",
  },
  //... resto de preguntas con mismos campos
];
