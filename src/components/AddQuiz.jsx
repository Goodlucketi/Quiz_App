import React, { useState } from 'react';

const AddQuiz = () => {
    const [formData, setFormData] = useState({
        category: '',
        difficulty: '',
        questions: [
            { questionText: '', options: ['', '', '', ''], answer: '' },
        ],
        createdBy:'',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleQuestionChange = (index, key, value) => {
        const updatedQuestions = [...formData.questions];
        
        if (key.startsWith('options.')) {
            const optionIndex = parseInt(key.split('.')[1], 10); // Extract the option index
            updatedQuestions[index].options[optionIndex] = value; // Update the specific option
        } else {
            updatedQuestions[index][key] = value; // Update other keys like 'questionText' or 'answer'
        }

        setFormData({ ...formData, questions: updatedQuestions });
    };

    const addQuestion = () => {
        setFormData({
            ...formData,
            questions: [
                ...formData.questions,
                { questionText: '', options: ['', '', '', ''], answer: '' },
            ],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/admin/addquiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                throw new Error(data.error || 'Failed to add quiz.');
            }
        } catch (error) {
            console.error('Error adding quiz:', error.message);
            alert(error.message);
        }
    };

    return (
        <div className='w-11/12 mx-auto p-4'>
            <form onSubmit={handleSubmit} className='p-4 md:p-8 md:w-6/12 mx-auto'>
                <h2 className='font-bold text-2xl text-center my-5'>Add Quiz</h2>

                <div className='my-2 md:my-5'>
                    <input name="category" value={formData.category} onChange={handleChange} required placeholder='Quiz Category' className='p-3 w-full rounded-lg bg-slate-50/50 shadow-md border-0' />
                </div>
                <div className='my-2 md:my-5'>
                    <select name="difficulty" value={formData.difficulty} onChange={handleChange} required className='p-3 w-full rounded-lg bg-slate-50/50 shadow-md border-0'>
                        <option value="">Select Difficulty</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                        <option value="Professional">Professional</option>
                    </select>
                </div>
                <h3 className='font-bold text-lg mt-4 p-3'>Questions</h3>
                {formData.questions.map((question, index) => (
                    <div key={index}>
                        <label className='px-3'>Question {index + 1}</label>
                        <textarea
                            type="text"
                            value={question.questionText}
                            onChange={(e) =>
                                handleQuestionChange(index, 'questionText', e.target.value)
                            }
                            required placeholder='Type Question Here'
                            className='p-3 w-full rounded-lg bg-slate-50/50 shadow-md border-0'
                        ></textarea>
                        {question.options.map((option, optIndex) => (
                            <input
                                key={optIndex}
                                type="text"
                                placeholder={`Option ${optIndex + 1}`}
                                value={option}
                                onChange={(e) =>
                                    handleQuestionChange(index, `options.${optIndex}`, e.target.value)
                                }
                                required
                                className='p-3 w-full rounded-lg bg-slate-50/50 shadow-md border-0 mb-1'
                            />
                        ))}
                        <input
                            type="text"
                            placeholder="Correct Answer"
                            value={question.answer}
                            onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
                            required
                            className='p-3 w-full rounded-lg bg-slate-50/50 shadow-md border-0 mb-5'
                        />
                    </div>
                ))}
                <button type="button" onClick={addQuestion} className='p-3 w-full rounded-lg bg-blue-500 text-white shadow-md border-0 my-3'>
                    Add Another Question
                </button>

                <input type="text" name="createdBY" id="createdBy" value={formData.createdBy} onChange={handleChange} placeholder='Created By' className='p-3 w-full rounded-lg bg-slate-50/20 shadow-md border-2' />
                <button type="submit" className='p-3 w-full rounded-lg bg-blue-700 text-white shadow-md border-0 my-3'>Submit Quiz</button>
            </form>
        </div>
    );
};

export default AddQuiz;
