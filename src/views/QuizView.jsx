import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const QuizPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const quizzes = location.state?.quizzes || [];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [score, setScore] = useState(null)
    
    
    const handleAnswerSelect = (answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: answer,
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizzes.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateScore();
        }
    };

    const calculateScore = () => {
        let totalScore = 0;
        quizzes.forEach((quiz, index) => {
            if (selectedAnswers[index] === quiz.answer) {
                totalScore++;
            }
        });
        setScore(totalScore);
    };

    const handleFinish = () => {
        navigate('/');
    };

    if (quizzes.length === 0) {
        return (
            <div className="quiz-page">
                <h2>No quizzes available</h2>
                <button onClick={handleFinish} className="btn btn-primary">
                    Go Back
                </button>
            </div>
        );
    }

    if (score !== null) {
        return (
            <div>
                <h2>Quiz Completed!</h2>
                <p>
                    Your score: {score} out of {quizzes.length}
                </p>
                <button onClick={handleFinish}>Go Back to Categories</button>
            </div>
        );
    }
    const currentQuestion = quizzes[currentQuestionIndex]
    return (
        <div>
            <div className="quiz-page">
                <h1>{location.state?.category} Quiz</h1>
                <h2>Difficulty: {location.state?.difficulty}</h2>
                {currentQuestion && (
                <div className="question-container">
                        <h3>{`Q${currentQuestionIndex + 1}: ${currentQuestion.questionText}`}</h3>
                        <ul>
                            {currentQuestion.options.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${currentQuestionIndex}`}
                                            value={option}
                                            onChange={() => handleAnswerSelect(option)}
                                            checked={
                                                selectedAnswers[currentQuestionIndex] === option
                                            }
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                    

                <div className="actions">
                    <button
                        onClick={handleNext}
                        className=""
                        disabled={!selectedAnswers[currentQuestionIndex]}
                    >
                        {currentQuestionIndex < quizzes.length - 1
                            ? 'Next Question'
                            : 'Finish Quiz'}
                    </button>
                </div>
            </div>        
        </div>
    );
};

export default QuizPage;
