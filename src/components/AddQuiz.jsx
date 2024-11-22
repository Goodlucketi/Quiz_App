import { useState } from "react";

const AddQuiz = () => {
    const [formData, setFormData] = useState({
        quiz_category:'',
        quiz_difficulty:'',
        quiz_text:'',
        createdBy:''
    })
    const[loading, setLoading]=useState(false)
    const[error, setError]=useState(null)

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSignUp = async (e)=>{
        e.preventDefault()
        setLoading(true)
        console.log(formData);
        
        if(!formData.quiz_category || !formData.quiz_difficulty || !formData.quiz_text || !formData.createdBy){
            setError("Please fill all Fields")
            setLoading(false)
            setTimeout(()=>{
                setError("")   
            }, 5000)
            return
        }
        
        try {
            const response = await fetch('/', {
                method:'POST',
                headers:{
                    "Content-Type":'application/json',
                },
                body: JSON.stringify(formData)
            })

            if(!response){
                throw new Error("Failed to Register, Try Again");     
            }
            
            const data = await response.json()
            alert("Registration Successful", )

        } catch (error) {
            console.error("Error", error.message)
        } finally{
            setLoading(false)
        }   
    }

    return ( 
        <main className="signup-form h-screen">
            <div className="w-11/12 mx-auto p-4 md:py-20">
                <form onSubmit={handleSignUp} className="signUp bg-slate-50/70 md:w-5/12 mx-auto shadow-lg rounded-xl md:px-8 py-10 mt-10">
                    <h2 className="text-center text-3xl my-5 font-bold text-blue-800">ADD QUIZ</h2>
                    {error && (
                        <p className="text-red-600 text-center mt-2 font-mono">{error}</p>
                    )}
                    <div className="mb-4">
                        <select 
                            name="quiz_category" 
                            id="quiz_category"  
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full"
                            value={formData.quiz_category}
                            onChange={handleInputChange}
                        >
                            <option value="">Quiz Category</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javascript">Javascript</option>
                            <option value="react">React</option>
                            <option value="vue">Vue Js</option>
                            <option value="angular">Angular</option>
                            <option value="node">Node JS</option>
                            <option value="php">PHP</option>
                        </select>
                    </div>
                    <div className="my-4">
                    <select 
                            name="quiz_difficulty" 
                            id="quiz_difficulty"  
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full"
                            value={formData.quiz_difficulty}
                            onChange={handleInputChange}
                        >
                            <option value="">Quiz Difficulty Level</option>
                            <option value="easy">Easy</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="expert">Expert</option>
                            <option value="pro">Professional</option>
                        </select>
                    </div>

                    <div className="my-4">
                        <textarea 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            name="quiz_text" 
                            id="quiz_text" 
                            placeholder="Type Quiz"
                            value={formData.quiz_text}
                            onChange={handleInputChange} 
                        ></textarea>
                    </div>
                    <div className="my-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="text" 
                            name="createdBy" 
                            id="createdBy" 
                            placeholder="Added By" 
                            value={formData.createdBy}
                            onChange={handleInputChange} 
                        />
                    </div>
                    
                    <div className="my-4">
                        <button 
                            className={`${loading?"opacity-50 cursor-not-allowed Up...":""} bg-blue-800 text-white hover:bg-blue-600 duration-500 transition-all border-2 p-3 rounded-lg shadow-sm w-full`} 
                            type="submit" 
                            disabled={loading}>
                                {loading?"Uploading Quiz...":"Add Quiz"}
                        </button>
                        
                    </div>
                </form>
            </div>
        </main>
     );
}
 
export default AddQuiz;