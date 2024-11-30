import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const QuizPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [score, setScore] = useState(null)
    
    const quizzes = location.state?.quizzes || [];
    const currentQuestion = quizzes[currentQuestionIndex]
    const questions = currentQuestion.questions || []


    const handleAnswerSelect = (questionIndex, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answer,
        });
    };

 

    const calculateScore = () => {
        let totalScore = 0;
        questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                totalScore++;
            }
        });
        setScore(totalScore);
    };

    const handleFinish = () => {
        calculateScore()       
        navigate('/categories');
    };

    if (quizzes.length === 0) {
        return (
            <div className="quiz-page">
                <h2>No quizzes available</h2>
                <button onClick={handleFinish} className="p-4 rounded-md text-white bg-blue-700">
                    Go Back
                </button>
            </div>
        );
    }

    if (score !== null) {
        return (
            <div className='p-4 w-11/12 mx-auto md:w-5/12'>
                <h2>Quiz Completed!</h2>
                <p>
                    Your score: {score} out of {questions.length}
                </p>
                <button onClick={handleFinish}>Go Back to Categories</button>
            </div>
        );
    }
    

    // console.log(currentQuiz);
    // console.log(questions);
    // console.log(quizzes);
    
    
    
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
                                            onChange={() => handleAnswerSelect(questionIndex, option)}
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
                        
                    >Finish Quiz
                    </button>
                </div>
            </div>        
        </div>
    );
};

export default QuizPage;
