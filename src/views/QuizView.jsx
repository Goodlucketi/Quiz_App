import Navbar from "../components/Navbar";
import QuizBody from "../components/QuizBody";
import Quiz from "../components/QuizNav";

const QuizView = () => {
    return ( 
        <main>
            <Navbar />
            <Quiz/>
            <div>
                <QuizBody quiz_sn="1" quiz="quiz1" />
                <QuizBody quiz_sn="2" quiz="quiz2" />
                <QuizBody quiz_sn="3" quiz="quiz3" />
                <QuizBody quiz_sn="4" quiz="quiz4" />
                <QuizBody quiz_sn="5" quiz="quiz5" />
                <QuizBody quiz_sn="6" quiz="quiz6" />
                <QuizBody quiz_sn="7" quiz="quiz7" />
                <QuizBody quiz_sn="8" quiz="quiz8" />
                <QuizBody quiz_sn="9" quiz="quiz9" />
                <QuizBody quiz_sn="10" quiz="quiz10" />
            </div>
            
        </main>
     );
}
 
export default QuizView;