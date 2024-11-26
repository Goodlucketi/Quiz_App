const QuizBody = ({ quiz_sn, quiz, optionA, optionB, optionC, optionD }) => {
    return ( 
        <main>
            <div className="quizbdy relative p-8 shadow-xl w-11/12 mx-auto">
                <p className="px-2 py-1 sn absolute left-2 top-5 text-lg border-2 rounded-full">{quiz_sn}</p>
                <div className="question">
                    <p className={`${quiz} px-4`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis maxime voluptate hic aspernatur rem perspiciatis unde? Totam perferendis minima obcaecati!</p>
                </div>
                <div className="options">
                    <form className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10 items-center justify-center">
                        <div className="">
                            <input type="radio" name={`${quiz}-option`} id={`${quiz}-optionA`} value={optionA} className="hidden" />
                            <label htmlFor={`${quiz}-optionA`} className="label px-8 py-2 rounded-md bg-slate-500 text-white w-full block">Option A</label>
                        </div>

                        <div className="">
                            <input type="radio" name={`${quiz}-option`} id={`${quiz}-optionB`} value={optionB} className="hidden" />
                            <label htmlFor={`${quiz}-optionB`} className="label px-8 py-2 rounded-md bg-slate-500 text-white w-full block">Option B</label>
                        </div>

                        <div className="">
                            <input type="radio" name={`${quiz}-option`} id={`${quiz}-optionC`} value={optionC} className="hidden" />
                            <label htmlFor={`${quiz}-optionC`} className="label px-8 py-2 rounded-md bg-slate-500 text-white w-full block">Option C</label>
                        </div>

                        <div className="">
                            <input type="radio" name={`${quiz}-option`} id={`${quiz}-optionD`} value={optionD} className="hidden" />
                            <label htmlFor={`${quiz}-optionD`} className="label px-8 py-2 rounded-md bg-slate-500 text-white w-full block">Option D</label>
                        </div> 
                        <div className="btn">
                            <button type="submit" className="py-2 px-4 rounded-md bg-blue-500 text-white w-6/12 mx-auto block">Submit</button>    
                        </div>  
                    </form>
                </div>
            </div>
        </main>
     );
}
 
export default QuizBody;