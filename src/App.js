import "./App.css";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
       
       </Routes> 

      {
        // Code here
      }
      <Home/>
    </div>
  );
}

export default App;
