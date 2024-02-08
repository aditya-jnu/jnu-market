import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
function Home(props){
    const navigate = useNavigate();
    function clickHandler(){
       navigate("/ipform")
    }
    return(
        <div className="home">
           <div><Cards product={props.product}/></div>
           
        </div>
    )
}
export default Home;