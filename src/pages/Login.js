import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props){
    const navigate=useNavigate();
    const[logininfo, setLogininfo]=useState({email:"", password:""})
    function submitHandler(event){
        event.preventDefault();
        props.setIslog(true);
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
              <label htmlFor="email">Email Address</label>
              <input type="email"
                onChange={changeHandler}
                name="email"
                value={logininfo.email}
                required
              /> 
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                  onChange={changeHandler}
                  name="password"
                  value={logininfo.password}
                  required
                />
            </div>
            <div>
                <button>Sign in</button>
            </div>
          </form>
          <button>Sign in with Google</button>
        </div>
    )
}
export default Login;