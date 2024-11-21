import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
   
    return ( 
        <header className="fixed top-0 w-full bg-slate-700 p-2 text-white z-10">
            <nav className="p-2 w-11/12 mx-auto flex justify-between items-center">
                <Link to="/"><h1 className="font-bold font-mono text-xl">Quiz App</h1></Link>

                <div className="hidden md:block">
                    <Link className="mx-4" to="/">Home</Link>
                    <Link className="mx-4" to="/login">Login</Link>
                    <Link className="mx-4" to="/signup">Sign Up</Link>
                    <Link className="mx-4" to="/categories">Categories</Link>
                </div>

                <div className="nav-menu md:hidden">
                    <div className="p-1 mb-1 bg-white"></div>
                    <div className="p-1 mb-1 bg-white"></div>
                    <div className="p-1 mb-1 bg-white"></div>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;