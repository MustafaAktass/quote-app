import { useState,useEffect,useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

function Dropdown({onChange}){
    const[isOpen,setIsOpen]=useState(false)
    const[selection,setSelection]=useState(null);
    const handleClick=()=>{
        setIsOpen(!isOpen);
    }
    const divEl=useRef();
    useEffect(()=>{
        const handler=(event)=>{
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }

        };
        document.addEventListener('click',handler,true);
        return ()=>{
            document.removeEventListener('click',handler);
        };
    },[]);
    
    const handleSelect=(option)=>{
        setSelection(option);
    }
    const options=[
        {label:'Famous',value:'Famous'},
        {label:'Movies',value:'Movies'}
    ]
    const renderedOptions=options.map((option)=>{
        return <div  onClick={()=>handleOptionClick(option)}  key={option.value} className="bg-white  rounded w-32 h-10 text-center text-blue-700 p-1 font-semibold cursor-pointer ml-5 ">
            {option.label}
            </div>
    })
    const handleOptionClick=(option)=>{
        setIsOpen(false);
        handleDropdownValue(option.value);
        handleSelect(option);
    };
    const handleDropdownValue=(value)=>{
        onChange(value);
    }
    const section=<div className="flex items-center justify-center ">
        Kategori <FaArrowDown className="ml-3  text-blue-600 "/>
    </div>
    return (
        <div ref={divEl} className="left-1/3">
            <div onClick={handleClick} className="relative bg-white border-2 rounded w-32 h-10 text-center text-blue-700 p-1 font-semibold cursor-pointer ml-5  hover:bg-sky-50 duration-500">
                {selection?.value || section} 
            </div>
            <div className="absolute ">
                {isOpen && renderedOptions}
            </div>
        </div>
    );
}
export default Dropdown;