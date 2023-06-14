import { useState,useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import SaveContext from "../context/savecontext";
function SavedPage(){
  const{savedQuotes,setSavedQuotes,setCreateButtonClicked}=useContext(SaveContext);
    useEffect(() => {
        setCreateButtonClicked(false);     
        const storedQuotes = localStorage.getItem('savedQuotes');
        if (storedQuotes) {
          const parsedQuotes = JSON.parse(storedQuotes);
          setSavedQuotes(parsedQuotes);
        }
      }, []);
      const handleCardClick = (id) => {
        const updatedQuotes = savedQuotes.filter(quote => quote.id !== id);
        setSavedQuotes(updatedQuotes);
        localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
      }
      const renderedQuotes=savedQuotes.map((quote)=>{
        return<div className="w-1/2  p-4 m-5 bg-white border border-gray-200 rounded-xl" key={quote.id}>
             <p className="mb-2 text-center text-gray-900">{quote.quote}</p>
                <div className="flex justify-between">
                <button onClick={() => handleCardClick(quote.id)}>
                <FaTrash className="ml-6 mt-2" />
                </button>
                    <p className="text-right mr-6">{quote.creator}</p>
                </div>
            </div>
      });
      return (
        <div  className="w-full mt-9 flex flex-wrap justify-center items-center">
          {renderedQuotes}
        </div>
      );
}
export default SavedPage;