import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.png"
const Hero = () => {
    return ( 
        <header className="hero h-screen overflow-hidden relative ">
            <div className="w-11/12 mx-auto md:flex md:justify-center md:items-center pt-52 md:pt-20">
                <div className="absolute top-28 md:top-0 w-11/12 text-center md:text-left md:relative md:w-6/12">
                    <h1 className="md:py-2 text-3xl md:text-5xl font-bold text-cyan-600">READY TO TEST YOUR KNOWLEDGE?</h1>
                    <h2 className="md:py-2 text-2xl md:text-3xl">Try Out Our <span className="text-blue-700 font-bold">QUIZ APP</span> </h2>
                    <button className="my-3 bg-blue-700 text-slate-200 text-xl rounded-lg px-8 py-4 hover:bg-blue-500 transition-all duration-500"><Link to="/login">Get Started</Link></button>
                </div>
                <div className="image pt-24 md:pt-0 md:w-6/12">
                    <img src={heroImg} alt={heroImg + "Girl smirking"} />
                </div>
            </div>
            
        </header>
     );
}
 
export default Hero;