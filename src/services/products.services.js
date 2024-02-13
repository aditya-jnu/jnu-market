import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const productCollectionRef=collection(db,"products");
class productDataService{
  addProduct=(newProduct)=>{return addDoc(productCollectionRef, newProduct)}
  getAllProducts=()=>{
    return getDocs(productCollectionRef)
  }
}
export default new productDataService();