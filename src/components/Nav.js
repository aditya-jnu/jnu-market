import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Nav(props){
  const navigate =useNavigate();
    function signoutHandle(){
        props.setIslog(false);
        toast.error("Logged Out!!")
        navigate("/")
    }  
  return(
    <nav className="navigation">  
          <div className="name" onClick={()=>{navigate("/")}}>Marketplace</div>  
          {(!props.islog)?(<div className="btn"><NavLink to="/login"><button>Log in</button></NavLink><NavLink to="/signup"><button>Sign up</button></NavLink></div>):
          (<div className="btn"><NavLink to="/ipform"><button>Sell</button></NavLink><NavLink to="/"><button onClick={signoutHandle}>Sign out</button></NavLink></div>)} 
    </nav>
  );
}
export default Nav;