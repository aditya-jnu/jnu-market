function Card(props){
    return(
       <div className="card">
        <div className="carddata">
          <div id="title">
            <p>{props.cardinfo.productTitle}</p>
          </div>
          <div id="price">
            <p>Price : &#8377;{props.cardinfo.price}</p>
          </div>
          <div id="description">
            <p>{props.cardinfo.description}</p>
          </div>
          <div>
            <p>Product age : {props.cardinfo.productAge}</p>
          </div>
          <div id="location">
            <p>Location : {props.cardinfo.location}</p>
          </div>
          </div>
          <button>Contact</button>  
       </div>
    )
   }
   export default Card;