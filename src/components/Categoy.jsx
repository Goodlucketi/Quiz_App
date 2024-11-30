import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const QuizCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [quizzes, setQuizzes] = useState([]);
    const[loading, setLoading]=useState(false)

    const navigate = useNavigate();
    const categories = ['HTML', "CSS", "JAVASCRIPT", "REACT", 'NODE']

    console.log(categories);
    

    const fetchQuizzes = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                `https://quizapp-backend-76ko.onrender.com/auth/quizzes?category=${selectedCategory}&difficulty=${difficulty}`
            );
            const data = await response.json();

            if (response.ok) {
                setLoading(false)
                setQuizzes(data);
                navigate('/quiz', { state: { quizzes:data } }); // Navigate to Quiz Page
            } else {
                throw new Error(data.error || 'Failed to fetch quizzes.');
            }
        } catch (error) {
            console.error('Error fetching quizzes:', error.message);
            alert(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchQuizzes();
    };

    return (
        <div className='py-20 mx-auto w-11/12'>
            
            <form onSubmit={handleSubmit} className='md:w-5/12 mx-auto p-4 md:pb-16 md:px-8 border-2 rounded-lg'>
                <h2 className='font-bold text-2xl text-center my-5'>Select Quiz Category</h2>
                <div className='my-3 md:my-5'>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='p-3 rounded-lg shadow-md w-full bg-slate-50/50'>
                        <option value="">Select Category</option>
                        {categories.map((category, index)=>{
                            return <option key={index} value={category}>{category}</option>
                        })}
                </select>
                </div>
                <div className='my-3 md:my-5'>
                    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className='p-3 rounded-lg shadow-md w-full bg-slate-50/50'>
                        <option value="">Select Difficulty</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                        <option value="Pro">Professional</option>
                    </select>
                </div>
                <button 
                    className={`${loading?"opacity-50 cursor-not-allowed Up...":""} bg-blue-800 text-white hover:bg-blue-600 duration-500 transition-all border-2 p-3 rounded-lg shadow-sm w-full`} 
                    type="submit" 
                    disabled={loading}>
                        {loading?"Starting Quiz...":"START QUIZ"}
                </button>
            </form>
        </div>
    );
};

export default QuizCategories;
