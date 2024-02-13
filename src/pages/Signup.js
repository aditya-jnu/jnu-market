import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup(props){
    const navigate=useNavigate();
    const[pass,isPass]=useState(true); 
    const[signupinfo, setSignupinfo]=useState({firstname:"", lastname:"", email:"", password:"", confirmpassword:""})
    function changeHandler(event){
       setSignupinfo((prevState)=>{
        return{...prevState,[event.target.name]:event.target.value}
    })
    }
    function submitHandler(event){
        event.preventDefault();
        navigate("/dashboard");
        props.setIslog(true);
        toast.success("Account Created Successfully!!")
        console.log('Account Created!!')
        console.log(signupinfo);
    }
  return(
    <div className="signup">
        <form onSubmit={submitHandler}>
            <div className="nameee">
              <div>
                <label htmlFor="firstname">First Name<sup style={{color:"white"}}>*</sup></label>
                <input type="text"
                  onChange={changeHandler}
                  name="firstname"
                  value={signupinfo.firstname}
                  required
                />
              </div>
              <div> 
                <label htmlFor="lastname">Last Name<sup style={{color:"white"}}>*</sup></label>
                <input type="text"
                  onChange={changeHandler}
                  name="lastname"
                  value={signupinfo.lastname}
                  required
                />
              </div> 
            </div>
            <div className="email">
                <label htmlFor="email">Email Address<sup style={{color:"white"}}>*</sup></label>
                <input type="email"
                  onChange={changeHandler}
                  name="email"
                  value={signupinfo.email}
                  required
                />
            </div>
            <div className="passs">
              <div>
                <label htmlFor="createpass">Create Password<sup style={{color:"white"}}>*</sup></label>
                <input type={(pass)?"password":"text"}
                  onChange={changeHandler}
                  name="password"
                  value={signupinfo.password}
                  required
                />
               </div>
               <div> 
                <label htmlFor="confirmpass">Confirm Password<sup style={{color:"white"}}>*</sup></label>
                <input type={(pass)?"password":"text"}
                 onChange={changeHandler}
                 name="confirmpassword"
                 value={signupinfo.confirmpassword}
                 required
                />
                </div>
            </div>
            {(pass)?<FaEye onClick={()=>isPass(false)} style={{cursor:"pointer"}} />:<FaEyeSlash onClick={()=>isPass(true)} style={{cursor:"pointer"}}/>}
            <button>Create Account</button>  
        </form>
        <div>OR</div>
        <button className="google">Sign in with Google</button>
    </div>
  )
}
export default Signup;