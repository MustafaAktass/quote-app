import { createContext, useState } from "react";
const SaveContext=createContext();
function SaveProvider({children}){
    const[save,setSave]=useState(false);
    const [savedQuotes,setSavedQuotes]=useState([]);
    const [createButtonClicked, setCreateButtonClicked] = useState(false);
    return <SaveContext.Provider value={{setSave,save,savedQuotes,setSavedQuotes,createButtonClicked, setCreateButtonClicked}}>
        {children}
    </SaveContext.Provider>

};
export {SaveProvider};
export default SaveContext;