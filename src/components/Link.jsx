import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

 function Link({to,children,className,activeClassName}){
    const{navigate,currentPath}=useContext(NavigationContext)
    const classes=classNames(
        'bg-white inline-block border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold cursor-pointer',
        className,
        currentPath==to && activeClassName 
    )
    const handleClick =(event) => {
        event.preventDefault();
        navigate(to);
    }
return <a href={to} className={classes} onClick={handleClick}>{children}</a>
}
export default Link;