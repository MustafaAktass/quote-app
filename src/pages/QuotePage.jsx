import { useContext, useState } from "react";
import options from "../api";
import QuoteCard from "../components/QuoteCard";
import Dropdown from "../components/dropdown";
import SaveContext from "../context/savecontext";
import uuid from 'react-uuid';
function QuotePage(){
   const[quote,setQuote]=useState('');
   const[creator,setCreate]=useState('');
   const[cat,setCat]=useState(null);
   const{save,setSave,savedQuotes,setSavedQuotes, setCreateButtonClicked}=useContext(SaveContext);
   const uniqId=uuid();
   const handleDropdownValue=(value)=>{
      setCat(value);
   }
   const handleClick=async()=>{
      const result=await options(cat);
      setCreateButtonClicked(true);
      var write=result[0]
      var author=result[1]
      setSave(false)
      setQuote(write);
      setCreate(author);
      if(save){
         handleSave();
      }
   }
  const handleSave=() => {
   const storedQuotes = localStorage.getItem('savedQuotes');
   let parsedQuotes = [];
   if (storedQuotes) {
      parsedQuotes = JSON.parse(storedQuotes);
   }
   const isQuoteExists = parsedQuotes.some((savedQuote) => {
      return (
        savedQuote.quote === quote
      );
    });
    if (isQuoteExists) {
      return;
    }
    if(quote==''){
      return;
    }
   const newQuote={
      quote:quote,
      creator:creator,
      category:cat,
      id:uniqId,
      
   }
   const updatedQuotes = [...savedQuotes, newQuote];
    setSavedQuotes(updatedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
  }

return  <div>
<div className=" flex justify-center">
   <div className=" w-1/2  justify-center mt-12 mb-12">
      <div className="flex items-center w-full justify-center">
      <Dropdown onChange={handleDropdownValue} />
       <div className=" bg-white border-2 rounded w-32 h-10 text-center text-blue-700 p-1 font-semibold cursor-pointer ml-5 hover:bg-sky-50 duration-500"
      onClick={handleClick} >Create</div>
      </div>
   </div>
</div>
   <div className=" w-full mt-9 flex justify-center">
   <QuoteCard category={cat} creator={creator}  handleSave={handleSave}>{quote}</QuoteCard>
   </div>
</div>

}
export default QuotePage;