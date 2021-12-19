function Questions() {
  const qustionsData = [
    { text: "¿A que hora se levanta pablo?" },
    { text: "¿Cómo llega Pablo a la universidad?" },
    { text: "¿A qué hora son las clases en la universidad?" },
    { text: "¿Qué hace Pablo después de las clases?" },
    { text: "¿A qué hora sale Pablo a correr?" },
    { text: "¿A dónde va Pablo con sus amigos?" },
    { text: "¿Con quién y a qué hora cena Pablo?" },
    { text: "¿A qué hora empieza su programa favorito?" },
  ];

  return (
    <div className="questions">
      <h2>Cuestiones</h2>
      {qustionsData.map((question, i) => (
        <p>{`${i + 1}. ${question.text}`}</p>
      ))}
    </div>
  );
}

export default Questions;
