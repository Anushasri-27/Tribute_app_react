import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./PAGES/Home";
import Contact from '../src/PAGES/Contact';
import MainLayout from '../src/COMPONENT/MainLayout';
function App() {
  return (
    //navigation
    <BrowserRouter>
       <Routes>
              <Route element={<MainLayout />}>
                      <Route path="/" element={ <Home /> } ></Route>
                      <Route path="/contact" element={ <Contact />}></Route>
              </Route>

               <Route path="*" element={<div>PAGE NOT FOUND</div>}   ></Route>           
       </Routes>
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
