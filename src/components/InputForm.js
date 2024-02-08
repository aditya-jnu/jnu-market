import { useState } from "react";

function InputForm(){
  const[info,setInfo]=useState({docid:"",prodid:"",title:"",des:"",price:"",condition:"",date:"",timeold:"",location:"",image:""})

  function submitHandler(event){
    event.preventDefault();
    console.log("Form Submitted!!")
    console.log(info);
  }
  function changeHandler(event){
     setInfo((prevState)=>{
      if(event.target.type==="file"){
        return{...prevState,[event.target.name]:event.target.files[0]} 
      }
      else{
       return{...prevState,[event.target.name]:event.target.value}
      }
     })
  }

  return(
    <div className="ipform">
        <form onSubmit={submitHandler} className="ip">
          <div>
            <label htmlFor="text">Title</label>
            <input type="text"
             onChange={changeHandler}
             name="title"
             value={info.title}
             id="text"
            />
          </div> 
          <div>
            <label htmlFor="des">Description</label>
            <input type="text"
             onChange={changeHandler}
             name="des"
             value={info.des}
             id="des"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number"
             onChange={changeHandler}
             name="price"
             value={info.price}
             id="price"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select onChange={changeHandler} name="location" id="location" value={info.location}>
              <option value="Mahi/Mandavi">Mahi/Mandavi</option>
              <option value="Lohit">Lohit</option>
              <option value="Chandrabhaga">Chandrabhaga</option>
              <option value="Koyna">Koyna</option>
              <option value="Shipra">Shipra</option>
              <option value="Tapti">Tapti</option>
              <option value="Sabarmati">Sabarmati</option>
              <option value="Narmada">Narmada</option>
              <option value="Sutlej">Sutlej</option>
              <option value="Jhelum">Jhelum</option>
              <option value="Periyar">Periyar</option>
              <option value="Kaveri">Kaveri</option>
              <option value="Godavari">Godavari</option>
              <option value="Ganga">Ganga</option>
              <option value="Damodar">Damodar</option>  
              <option value="Yamuna">Yamuna</option>
              <option value="Brahmaputra">Brahmaputra</option>
              <option value="Mahanadi">Mahanadi</option>
              <option value="Outside JNU">Outside JNU</option>
            </select>
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="file"
              accept="image/*"
              onChange={changeHandler}
              name="image"
              id="image"
            />
          </div>
          <button>Add Product</button>
        </form>
    </div>
  )
}
export default InputForm;