import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login(props){
    const[pass,isPass]=useState(true);
    const navigate=useNavigate();
    const[logininfo, setLogininfo]=useState({email:"", password:""})

    function submitHandler(event){
        event.preventDefault();
        props.setIslog(true);
        toast.success("Logged in Successfully!!")
        console.log("Login Done")
        console.log(logininfo);
        navigate("/dashboard")
    }
    function changeHandler(event){
        setLogininfo((prevState)=>{return{
            ...prevState,[event.target.name]:event.target.value
        }})
    }
    return(
        <div className="login">
          <form onSubmit={submitHandler}>
            <div> 
              <label htmlFor="email">Email Address<sup style={{color:"white"}}>*</sup></label>
              <input type="email"
                onChange={changeHandler}
                name="email"
                value={logininfo.email}
                required
              /> 
            </div>
            <div>
                <label htmlFor="password">Password<sup style={{color:"white"}}>*</sup></label>
                <input type={(pass)?"password":"text"}
                  onChange={changeHandler}
                  name="password"
                  value={logininfo.password}
                  required
                />
                {(pass)?<FaEye onClick={()=>isPass(false)} style={{cursor:"pointer"}} />:<FaEyeSlash onClick={()=>isPass(true)} style={{cursor:"pointer"}}/>}
            </div>
            <button>Sign in</button>
          </form>
          <div>OR</div>
          <button className="google">Sign in with Google</button>
        </div>
    )
}
export default Login;