import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Auth_Login = () => {
    const [formData, setFormData] = useState({
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

    const handleLogin = async (e)=>{
        e.preventDefault()
        setLoading(true)
        if(!formData.player_username || !formData.player_password){
            setError("Please fill all Fields")
            setLoading(false)
            setTimeout(()=>{
                setError("")   
            }, 5000)
            return
        }
        
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method:'POST',
                headers:{
                    "Content-Type":'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            if(data.success){
                localStorage.setItem("token", data.token)
                setSuccess(data.message + ", Please wait...")
                setTimeout(()=>{
                    navigate('/categories')
                    setSuccess(null)
                }, 3000)  
            }else{
                setError(data.message + " Try again...")
                setTimeout(()=>{
                    setError(null)
                }, 5000) 
                setLoading(false)
            }

        } catch (error) {
            console.error("Error", error.message)
        }  
    }
    return ( 
        <main className="signup-form h-screen">
            <div className="w-11/12 mx-auto p-4 py-20 md:py-32">
                <form onSubmit={handleLogin} className="signUp bg-slate-50/70 md:w-5/12 mx-auto shadow-lg rounded-xl md:px-8 py-10 mt-10">
                    <h2 className="text-center my-5 text-3xl font-bold text-blue-800">Login</h2>
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
                            name="player_username" id="player_username" 
                            placeholder="Username /"
                            value={formData.player_username}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="my-4">
                        <input 
                            className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" 
                            type="password" 
                            name="player_password" id="player_password" 
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
                                {loading?"Loggin In...":"LOGIN"}
                        </button>
                    </div>
                    <p className="text-center">Don't have Account? <Link className="text-blue-800" to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </main>
     );
}
 
export default Auth_Login;