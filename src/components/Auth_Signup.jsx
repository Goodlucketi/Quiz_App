import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <main className="signup-form h-screen">
            <div className="w-11/12 mx-auto p-4 py-20">
                <form className="signUp bg-slate-50/70 md:w-5/12 mx-auto shadow-lg rounded-xl px-8 py-10 mt-10">
                    <h2 className="text-center text-3xl font-bold text-blue-800">Sign Up</h2>
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="text" name="player_name" id="player_name" placeholder="Fullname (First Name, Last Name" />
                    </div>
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="email" name="player_email" id="player_email" placeholder="Email" />
                    </div>
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="text" name="player_phone" id="player_phone" placeholder="Phone" />
                    </div>
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="text" name="player_username" id="player_username" placeholder="Username" />
                    </div>
                    <div className="my-4">
                        <input className="bg-transparent border-2 p-3 rounded-lg shadow-sm w-full" type="password" name="player_password" id="player_password" placeholder="Password" />
                    </div>
                    
                    <div className="my-4">
                        <input className="bg-blue-800 text-white hover:bg-blue-600 duration-500 transition-all border-2 p-3 rounded-lg shadow-sm w-full" type="submit" value="SIGN UP"/>
                    </div>
                    <p className="text-center">Already have Account? <Link className="text-blue-800" to="/login">Login</Link></p>
                </form>
            </div>
        </main>
     );
}
 
export default Signup;