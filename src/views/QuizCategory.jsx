import Category from "../components/Category";
import AuthNavbar from "../components/AuthNavbar";
import Footer from "../components/Footer";

const QuizCategory = () => {
    return ( 
        <main className="">
            <AuthNavbar />
            <section className="pt-20">
                <h2 className="text-center text-slate-800 font-bold text-3xl p-4 my-5">Quiz Category</h2>
                <div className="category-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
                    <Category 
                        title="HTML" />
                    <Category 
                        title="CSS" />
                    <Category 
                        title="JavaScript" />
                    <Category 
                        title="Node Js" />
                    <Category 
                        title="React Js" />
                    <Category 
                        title="Vue Js" />
                    <Category 
                        title="Angular Js" />
                    <Category 
                        title="PHP" />
                </div>
            </section>
            <Footer />
        </main>
     );
}
 
export default QuizCategory;