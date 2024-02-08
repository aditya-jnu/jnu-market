function Card(props){
    console.log("Reached Card",props.cardinfo)
    return(
       <div className="card">
           <img src={props.cardinfo.url}></img>
       </div>
    )
   }
   export default Card;