// Quiz.js
import React, { useState } from 'react';
import { quizData } from './Data';
import '../App.css';   

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-section">
          <h2>Ton score est {score} sur {quizData.length}</h2>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}/{quizData.length}</h2>
          <p>{quizData[currentQuestion].question}</p>
          
          <div className="options-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>

          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            {currentQuestion === quizData.length - 1 ? "Voir les résultats" : "Question suivante"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
