import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
   const [navMenu, setNavMenu] = useState(false)

   const navToggle = ()=>{
        setNavMenu(!navMenu)        
   }
    return ( 
        <header className="fixed top-0 w-full bg-slate-700 p-2 text-white z-10">
            <nav className="p-2 w-11/12 mx-auto flex justify-between items-center">
                <Link to="/"><h1 className="font-bold font-mono text-xl">Quiz App</h1></Link>

                <div className={`${navMenu ? ('block'): ('hidden')} absolute bg-slate-700/95 md:bg-transparent top-16 md:top-0 left-0 h-screen md:h-0 md:relative pt-10 md:pt-0 md:items-center md:flex `}>

                    <Link className="block hover:bg-slate-50 hover:text-slate-700 md:bg-transparent transition-all duration-500 mb-3 md:mb-0 p-2 rounded-md md:inline mx-4" to="/">Home</Link>

                    <Link className="block hover:bg-slate-50 hover:text-slate-700 md:bg-transparent transition-all duration-500 mb-3 md:mb-0 p-2 rounded-md md:inline mx-4" to="/login">Login</Link>

                    <Link className="block hover:bg-slate-50 hover:text-slate-700 md:bg-transparent transition-all duration-500 mb-3 md:mb-0 p-2 rounded-md md:inline mx-4" to="/signup">Sign Up</Link>

                    <Link className="block hover:bg-slate-50 hover:text-slate-700 md:bg-transparent transition-all duration-500 mb-3 md:mb-0 p-2 rounded-md md:inline mx-4" to="/categories">Categories</Link>
                </div>

                <div onClick={navToggle} className="navMenu md:hidden">
                    <div className="p-1 mb-1 bg-white"></div>
                    <div className="p-1 mb-1 bg-white"></div>
                    <div className="p-1 mb-1 bg-white"></div>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;