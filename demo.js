function generateNewName() {
  const questions = [
    "Hi, Sabrina",
    "Hi, Monce",
    "Hi, Donny",
    "Hi, Alfi",
    "Hi, Kayla",
    "Hi, Kaaliyah",
    "Hi, Brett",
    "Hi, Jesus",
    "Hi, Remsey",
    "Hi, Abdi",
    "Hi, Rene",
    "Hi, Daniel",
    "Hi, Kadi",
    "Hi, Uriel",
    "Hi, Victor",
    "Hi, Guadalupe",
    "Hi, Jeranesca",
    "Hi, Leslie",
    "Hi, Maximo",
    "Hi, Niran",
    ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = questions[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateIcebreaker();
