function Card(props){
    return(
       <div className="card">
           <img src={props.cardinfo.url}></img>
       </div>
    )
   }
   export default Card;