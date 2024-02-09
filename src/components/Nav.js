import { NavLink } from "react-router-dom";
function Nav(props){
    function signoutHandle(){
        props.setIslog(false)
    }  
  return(
    <nav className="navigation">    
          {(!props.islog)?(<div className="btn"><button><NavLink to="/login">Log in</NavLink></button><button><NavLink to="/signup">Sign up</NavLink></button></div>):
          (<div className="btn"><button><NavLink to="/ipform">Sell</NavLink></button><button onClick={signoutHandle}><NavLink to="/">Sign out</NavLink></button></div>)} 
      </nav>
  )
}
export default Nav;