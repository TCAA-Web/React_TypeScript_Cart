import { createContext } from 'react'
import { ProductElement } from '../types/Product.types'

export const CartContext = createContext({
  cartData: [] as Array<ProductElement>,
  setCartData: (_productArr: ProductElement[]) => {
    console.log('setCartData init ', _productArr)
  },
  addToCart: (product: ProductElement) => {
    console.log('addToCart init ', product)
  },
  removeFromCart: (ProductID: number) => {
    console.log('removeFromCart init ', ProductID)
  },
  clearCart: () => {},
})
