import { useContext,useEffect } from "react";
import { FaBookmark,FaRegBookmark } from "react-icons/fa";
import SaveContext from "../context/savecontext";
function QuoteCard({children,creator,category,handleSave}){ 
    const{save,setSave,createButtonClicked,setCreateButtonClicked}=useContext(SaveContext);
    const handleSaveClick = () => {
        handleSave();
        setSave(!save);
    } 
    
    const saveButton=<button onClick={handleSaveClick}>
        {save ? <FaBookmark className="ml-6 mt-2"/>:<FaRegBookmark className="ml-6 mt-2"/>}
    </button>
    return <div className="w-1/2  p-4  bg-white border border-gray-200 rounded-xl">
                <p className="mb-2 text-center text-gray-900">{category && createButtonClicked ? children:"Please Select Category"}</p>
                <div className="flex justify-between">
                    {category && createButtonClicked ? saveButton : null}
                    <p className="text-right mr-6">{category && createButtonClicked ? creator : null}</p>
                </div>
           </div>;
}
export default QuoteCard;
