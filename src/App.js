import { Route, Routes} from "react-router-dom";
import { useState,useEffect } from "react";
import MainHeader from "./components/MainHeader";
import Spinner from "./components/Spinner";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import InputForm from "./pages/InputForm";

function App() {
  const[islog, setIslog]=useState(false);
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
      <Nav islog={islog} setIslog={setIslog}/>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/dashboard" element={loading?(<Spinner/>):(<Dashboard product={product}/>)}/>
          <Route path="/login" element={<Login setIslog={setIslog}/>} />
          <Route path="/signup" element={<Signup setIslog={setIslog}/>}/>
          <Route path="/ipform" element={<InputForm/>}/>
        </Route>
      </Routes>  
    </div>
  );
}
export default App;
