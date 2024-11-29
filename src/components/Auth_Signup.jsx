import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
    const [formData, setFormData] = useState({
        player_name:'',
        player_email:'',
        player_username:'',
        player_password:''
    })
    const[loading, setLoading]=useState(false)
    const[error, setError]=useState(null)
    const[success, setSuccess]=useState(null)
    const navigate = useNavigate()

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSignUp = async (e)=>{
        e.preventDefault()
        setLoading(true)
        if(!formData.player_name || !formData.player_email || !formData.player_username || !formData.player_password){
            setError("Please fill all Fields")
            setLoading(false)
            setTimeout(()=>{
                setError("")   
            }, 5000)
            return
        }
        
        try {
            const response = await fetch('https://quizapp-backend-76ko.onrender.com/auth/signup', {
                method:'POST',
                headers:{
                    "Content-Type":'application/json',
                },
                body: JSON.stringify(formData)
            })

            
            if(!response){
                throw new Error("Failed to Register, Try Again"); 
                return
                setLoading(false) 
            }
            
            const data = await response.json()
            if(data){
              setSuccess(data.message)
                setFormData({
                    player_name:'',
                    player_email:'',
                    player_username:'',
                    player_password:''
                })
                setTimeout(()=>{
                    navigate('/login')
                    setSuccess(null)
                }, 3000)  
            }
            

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
                    <h2 className="text-center text-3xl my-5 font-bold text-blue-800">Sign Up</h2>
                    {error && (
                        <p className="text-red-600 text-center mt-2 font-mono">{error}</p>
                    )}
                    {success && (
                        <p className="text-green-600 text-center mt-2 font-mono">{success}</p>
                    )}
                    <div className="mb-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="text" 
                            name="player_name" 
                            id="player_name" 
                            placeholder="Fullname (First Name, Last Name"
                            value={formData.player_name}
                            onChange={handleInputChange}    
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="email" 
                            name="player_email" 
                            id="player_email" 
                            placeholder="Email"
                            value={formData.player_email}
                            onChange={handleInputChange} 
                        />
                    </div>
                    {/* <div className="my-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="text" 
                            name="player_phone" 
                            id="player_phone" 
                            placeholder="Phone" 
                            value={formData.player_phone}
                            onChange={handleInputChange} 
                        />
                    </div> */}
                    <div className="my-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="text" 
                            name="player_username" 
                            id="player_username" 
                            placeholder="Username"
                            value={formData.player_username}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="password" 
                            name="player_password" 
                            id="player_password" 
                            placeholder="Password" 
                            value={formData.player_password}
                            onChange={handleInputChange} 
                        />
                    </div>
                    
                    <div className="my-4">
                        <button 
                            className={`${loading?"opacity-50 cursor-not-allowed Up...":""} bg-blue-800 text-white hover:bg-blue-600 duration-500 transition-all border-2 p-3 rounded-lg shadow-sm w-full`} 
                            type="submit" 
                            disabled={loading}>
                                {loading?"Signing Up...":"Sign Up"}
                        </button>
                        
                    </div>
                    <p className="text-center">Already have Account? <Link className="text-blue-800" to="/login">Login</Link></p>
                </form>
            </div>
        </main>
     );
}
 
export default Signup;