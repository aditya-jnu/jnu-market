import Cards from "../components/Cards";
function Dashboard(props){
    return(
        <div>
           <div><Cards product={props.product}/></div> 
        </div>
    )
}
export default Dashboard;