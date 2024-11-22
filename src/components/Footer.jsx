import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="bg-slate-700">
            <div className="footer p-4 text-white w-11/12 mx-auto">
                <p>Are you an Admin? <Link to="/addquiz" className="text-gray-300 underline">Add Quiz</Link></p>
            </div>
        </footer>
     );
}
 
export default Footer;