function generateIcebreaker() {
  const questions = [
    "What's your favorite way to unwind after a long day of coding?",
    "What hobby would you get into if time and money weren't an issue?",
    "What's the last book you read or movie you watched that you really enjoyed?",
    "If you could visit any country in the world, where would you go and why?",
    "What's one skill you'd like to develop or hobby you'd like to take up?",
    "What's the most memorable vacation you've ever had?",
    "If you could have dinner with any historical figure, who would it be and why?",
    "What's your favorite season of the year and why?",
    "What’s your favorite dish to cook or eat?",
    "If you could instantly become an expert in something, what would it be?",
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = questions[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateIcebreaker();
