// Api Url : - https://fakestoreapi.com/products
// Api Url : - https://fakestoreapiserver.reactbd.org/api/products
import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios'
const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {

                const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products")
                const data = res.data
                setProducts(data.data)

            } catch (error) {
                console.log("fetching Error : ",error);
                
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        const getItems = JSON.parse(localStorage.getItem("cart"))
        if(getItems !== null){
            setCartItems(getItems)
        }
    },[])

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cartItems))
    },[cartItems])

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item._id === product._id);
            if(existingItem){
                return prevItems.map((item) => item._id === product._id ? {...item,quantity:item.quantity + 1} : item)
            }
            return [...prevItems,{...product,quantity:1}]
        })
    }

    const removeCart = (_id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id))
    }

    const updateQuantity = (_id,newQuantity) => {
        setCartItems((prevItems) => prevItems.map((item)=> item._id === _id ? {...item,quantity:newQuantity} : item))
    }


    const value = {
          products,
          cartItems,
          addToCart,
          removeCart,
          updateQuantity
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCartContext = () => useContext(CartContext);