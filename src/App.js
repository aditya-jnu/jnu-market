import { Route, Routes, NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import Spinner from "./components/Spinner";

function App() {
  const[loading,setLoading]=useState(true);
  const[product,setProduct]=useState(null);
  let url="https://api.thecatapi.com/v1/images/search?limit=10";
    // ***********
    async function fetchData(){
      setLoading(true);
      try{
        let response = await fetch(url);
        let output= await response.json();
        setProduct(output);
        console.log(output);
      }
      catch(error){
        console.log("Something went wrong!!")
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className="App">
      <nav className="navigation">
        <ul className="list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/ipform">Sell</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={loading?(<Spinner/>):(<Home product={product}/>)}/>
        <Route path="/ipform" element={<InputForm/>}/>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
