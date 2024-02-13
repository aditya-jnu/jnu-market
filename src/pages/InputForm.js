import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import productsServices from "../services/products.services";
function InputForm(){
  const navigate=useNavigate();
  const[info,setInfo]=useState({dateListed:"",description:"",location:"Mahi",price:"",productAge:"",productTitle:""})


  async function submitHandler(event){
    event.preventDefault();
    console.log("Form Submitted!!")
    console.log(info);
    const newProduct={
      productTitle:info.productTitle,
      description:info.description,
      price:info.price,
      location:info.location,
      productAge:info.productAge
    }
    try{
      await productsServices.addProduct(newProduct)
      toast.success("Product added successfully!!")
    }
    catch (err){
        toast.error("Failed");
        console.log(err)
    }
    navigate("/dashboard")

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
    <div className="ip">
        <form onSubmit={submitHandler}>
          <div className="formtitle">
            <label htmlFor="productTilte">Title</label>
            <input type="text"
             placeholder="cycle"
             onChange={changeHandler}
             name="productTitle"
             value={info.productTitle}
             id="productTilte"
             required
            />
          </div> 
          <div  className="formdes">
            <label htmlFor="description">Description</label>
            <textarea
             placeholder="kross brand in good condition....."
             onChange={changeHandler}
             name="description"
             value={info.description}
             id="description"
             required
            />
          </div>
          <div className="formprice">
            <label htmlFor="price">Price</label>
            <input type="number"
             placeholder="2500"
             className="no-spinner"
             onChange={changeHandler}
             name="price"
             value={info.price}
             id="price"
             min={0}
             required
            />
          </div>
          <div className="formloc">
            <label htmlFor="location">Location</label>
            <select onChange={changeHandler} name="location" id="location" value={info.location}>
              <option value="Mahi/Mandavi" selected>Mahi/Mandavi</option>
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
              required
            </select>
          </div>
          {/* <div>
            <label htmlFor="image">Image</label>
            <input type="file"
              accept="image/*"
              onChange={changeHandler}
              name="image"
              id="image"
            />
          </div> */}
          <div className="formage">
          <label htmlFor="productAge">Product Age</label>
            <input type="text"
             placeholder="8 months"
             onChange={changeHandler}
             name="productAge"
             value={info.productAge}
             id="productAge"
             required
            />
          </div>
          <button>Add Product</button>
        </form>
    </div>
  )
}
export default InputForm;