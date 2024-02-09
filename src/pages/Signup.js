import { useState } from "react";
function Signup(){
     
    const[signupinfo, setSignupinfo]=useState({firstname:"", lastname:"", email:"", password:""})
    function changeHandler(event){
       setSignupinfo((prevState)=>{
        return{...prevState,[event.target.name]:event.target.value}
       })
    }
    function submitHandler(event){
        event.preventDefault();
        console.log('Account Created!!')
        console.log(signupinfo);
      }
  return(
    <div className="signup">
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text"
                  onChange={changeHandler}
                  name="firstname"
                  value={signupinfo.firstname}
                  required
                />
                <label htmlFor="lastname">Last Name</label>
                <input type="text"
                  onChange={changeHandler}
                  name="lastname"
                  value={signupinfo.lastname}
                  required
                />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email"
                  onChange={changeHandler}
                  name="email"
                  value={signupinfo.email}
                  required
                />
            </div>
            <div>
                <label htmlFor="createpass">Create Password</label>
                <input type="password"
                  onChange={changeHandler}
                  name="password1"
                  value={signupinfo.password}
                  required
                />
                <label htmlFor="confirmpass">Confirm Password</label>
                <input type="password"
                 onChange={changeHandler}
                 name="password2"
                 value={signupinfo.password}
                 required
                />
            </div>
            <div>
                <button>Create Account</button>
            </div>
        </form>
        <button>Sign in with Google</button>
    </div>
  )
}
export default Signup;