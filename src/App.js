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
import productDataService from "./services/products.services"

function App() {
  const[islog, setIslog]=useState(false);
  const[loading,setLoading]=useState(true);
  const[product,setProduct]=useState(null);
 
    // ***********
    async function fetchData(){
      setLoading(true);
      const data=await productDataService.getAllProducts();
      console.log("hi",data.docs)
      setProduct(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      console.log("h",product)
      setLoading(false);
    }
    useEffect(()=>{
      const storedLogin = localStorage.getItem('isLoggedIn');
      if (storedLogin) {
      setIslog(true);
    }
      fetchData();
    },[])
  return ( 
    <div className="App">
      <Nav islog={islog} setIslog={setIslog}/>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/dashboard" element={loading?(<Spinner/>):(<Dashboard product={product}/>)}/>
          <Route path="/login" element={<Login setIslog={setIslog} islog={islog}/>} />
          <Route path="/signup" element={<Signup setIslog={setIslog}/>}/>
          <Route path="/ipform" element={<InputForm/>}/>
        </Route>
      </Routes>  
    </div>
  );
}
export default App;
