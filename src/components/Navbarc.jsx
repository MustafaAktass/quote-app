import Link from "./Link";
function Navbarc(){
const links=[
   {label:'Quote',path:'/'},
   {label:'Saved',path:'/saved'}
]
const renderedLinks=links.map((link) => {
   return (    
         <Link key={link.label} 
         to={link.path} 
         activeClassName="bg-blue-50"
         >{link.label}</Link>   
   )
});
return (
   <div className="mt-20">
      <nav>
         <ul className="flex justify-center border-b">
            {renderedLinks}
         </ul>
      </nav> 
   </div>
)
}
export default Navbarc;