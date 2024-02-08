import Card from "./Card";
function Cards(props){
 return(
    <div className="carddd">
    <div className="cards">
      {props.product.map((data)=>{return <Card cardinfo={data} key={data.id}/>})}
    </div>
    </div>
 )
}
export default Cards;