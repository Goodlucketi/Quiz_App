import AddQuiz from "../components/AddQuiz";
import Navbar from "../components/Navbar";

const AddQuizView = () => {
    return ( 
        <main>
            <Navbar />
            <div className="py-20">
                <AddQuiz />
            </div>
            
        </main>
     );
}
 
export default AddQuizView;