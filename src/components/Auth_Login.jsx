import { Link } from "react-router-dom";
const Auth_Login = () => {
    return ( 
        <main className="signup-form h-screen">
            <div className="w-11/12 mx-auto p-4 py-32">
                <form className="signUp bg-slate-50/70 md:w-5/12 mx-auto shadow-lg rounded-xl px-8 py-10 mt-10">
                    <h2 className="text-center text-3xl font-bold text-blue-800">Login</h2>
                    
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="text" name="player_email" id="player_email" placeholder="Username / Email" />
                    </div>
                    
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="password" name="player_password" id="player_password" placeholder="Password" />
                    </div>

                    <div className="my-4">
                        <input className="bg-blue-800 text-white hover:bg-blue-600 duration-500 transition-all border-2 p-3 rounded-lg shadow-sm w-full" type="submit" value="LOGIN"/>
                    </div>
                    <p className="text-center">Don't have Account? <Link className="text-blue-800" to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </main>
     );
}
 
export default Auth_Login;