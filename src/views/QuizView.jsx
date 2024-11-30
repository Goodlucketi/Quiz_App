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
    const currentQuiz = quizzes[0]
    const questions = currentQuestion.questions || []

    console.log(currentQuiz);
    console.log(questions);
    console.log(quizzes);
    
    
    
    return (
        <div className='w-11/12 mx-auto p-4'>
            <div className="quiz-page">
                <h1>{currentQuestion.category} Quiz</h1>
                <h2>Difficulty: {currentQuestion.difficulty}</h2>
                {questions.map((question, questionIndex)=>(
                <div className="question-container my-3 shadow-md px-2 md:px-4 py-4 rounded-md bg-slate-50/50">
                        <h3>{`Q${questionIndex + 1}: ${question.questionText}`}</h3>
                        <ul className='md:mx-8'>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            value={option}
                                            onChange={() => handleAnswerSelect(option)}
                                            checked={
                                                selectedAnswers[questionIndex] === option
                                            }
                                        /> &nbsp;
                                         {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                    

                <div className="actions p-4 bg-blue-700 text-center text-white rounded-lg">
                    <button
                        onClick={calculateScore}
                        className=""
                        disabled={!selectedAnswers[currentQuestionIndex]}
                    >Finish Quiz
                    </button>
                </div>
            </div>        
        </div>
    );
};

export default QuizPage;
