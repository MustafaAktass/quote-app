import Route from "./components/Route";
import QuotePage from "./pages/QuotePage";
import SavedPage from "./pages/SavedPage";
import Navbarc from "./components/Navbarc";
function App(){
   return (
      <div>
         <Navbarc/>
         <Route path="/">
            <QuotePage></QuotePage>
         </Route>
         <Route path="/saved">
            <SavedPage></SavedPage>
         </Route>
      </div>
     
   );
}
export default App;