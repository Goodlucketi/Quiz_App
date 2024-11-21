const Category = ({ title, beginner, intermediate, expert, pro }) => {
    return ( 
        <div className="category">
            <div className="category-data p-5 shadow-lg text-center hover:scale-105 duration-500 transition-all rounded-xl bg-slate-50/90 ">
                <h2 className="p-2 text-2xl font-bold">{title}</h2>
                <p className="py-2 text-lg text-green-700">Select Difficulty Level</p>
                <form>
                    <div className="difficulty grid grid-cols-2 gap-x-3"> 
                        <div className="my-1">
                            <input type="radio" name={`${title}-difficulty`} id={`${title}-easy`} value={beginner} className="hidden" />
                            <label htmlFor={`${title}-easy`} className="label p-2 rounded-md bg-slate-500 text-white w-full block">Easy</label>
                        </div>

                        <div className="my-1">
                            <input type="radio" name={`${title}-difficulty`} id={`${title}-intermediate`} value={intermediate} className="hidden" />
                            <label htmlFor={`${title}-intermediate`} className="label p-2 rounded-md bg-slate-500 text-white w-full block">Intermediate</label>
                        </div>

                        <div className="my-1">
                            <input type="radio" name={`${title}-difficulty`} id={`${title}-expert`} value={expert} className="hidden" />
                            <label htmlFor={`${title}-expert`} className="label p-2 rounded-md bg-slate-500 text-white w-full block">Expert</label>
                        </div>

                        <div className="my-1">
                            <input type="radio" name={`${title}-difficulty`} id={`${title}-pro`} value={pro} className="hidden" />
                            <label htmlFor={`${title}-pro`} className="label p-2 rounded-md bg-slate-500 text-white w-full block">Professional</label>
                        </div>          
                    </div>
                    <input type="submit" value="Start Quiz" className="label p-2 rounded-md bg-green-700 text-white w-full block my-5" />
                </form>
                
            </div>
        </div>
     );
}
 
export default Category;