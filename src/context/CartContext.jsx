import  {createContext, useState } from 'react'

const CartContext = createContext();


export const CartContextProvider = ( {children}) => {
    const [carts, setCarts] = useState ([]);
    const [favs, setFavs] = useState([])

function addPropsToCart (property){
  console.log("added")

  const exitingProps = carts.find((item) =>
    item.id === property.id)

  if (exitingProps){
    return;
  }
const addNewProps = {...property, cartPropId: Date.now(),  quantity: 1}

setCarts ([...carts, addNewProps])
}

const incrementBtn = (cartPropId) =>{
setCarts(
  carts.map((property)=>
    property.cartPropId === cartPropId ? 
  {...property, quantity: property.quantity + 1}: property
)
)
}

const decrementBtn = (cartPropId) =>{
  setCarts(
  carts.map((property)=>
    property.cartPropId === cartPropId && property.quantity > 1 ? 
  {...property, quantity: property.quantity - 1}: property
)
) 
}

const sumTotalPrice = ()=>(
  carts.reduce((prevNum, property) => prevNum + property.price * property.quantity, 0)
)

const removeExistingProps = (cartPropId) =>{
   setCarts(carts.filter((property) => property.cartPropId !== cartPropId))
}
function addPropsToFav (property){
  console.log(property)

  const exitingFavProps = favs.find((item) =>
    item.id === property.id)

  if (exitingFavProps){
    return;
  }

const addNewFavProps = {...property, cartPropId: Date.now()}

setFavs ([...favs, addNewFavProps])
}

const removeExistingFavProps = (cartPropId) =>{
  console.log(cartPropId, "deleted")
   setFavs(favs.filter((property) => property.cartPropId !== cartPropId))
}

  return (
     <CartContext.Provider
        value = {{
          removeExistingFavProps,
          carts,
          setCarts,
          favs,
          setFavs,
          addPropsToFav,
  addPropsToCart,
  incrementBtn,
  decrementBtn,
  removeExistingProps,
  sumTotalPrice
        }}
    >
        {children}
    </CartContext.Provider>
  )
}

export default CartContext

