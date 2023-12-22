
import { createSlice } from '@reduxjs/toolkit'
export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.book.id === book.book.id)

      console.log('index == ' + index)
      console.log('book.book.id == ' + book.book.id)
      if (index >= 0) {
        state.items[index].quantity += 1
        state.items[index].total_price =state.items[index].quantity *  state.items[index].pricesale> 0 ? state.items[index].pricesale : state.items[index].price
      } else {
        console.log('--------------------------PUSH--------------------------')
        state.items.push({
          book: book.book,
          price: book.price,
          pricesale: book.pricesale,
          quantity: book.quantity,
          total_price: book.total_price
        })
      }
      

     
    },
    updateCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.book.id === book.book.id)
      if (index >= 0) {
        state.total -=  state.items[index].total_price

        state.items[index].quantity = book.quantity
        state.items[index].total_price =state.items[index].quantity *  state.items[index].pricesale> 0 ? state.items[index].pricesale : state.items[index].price
        state.total +=  state.items[index].total_price
      }
    },
    removeFromCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.book.id === book.book.id)
      if (index >= 0) {
        state.total -= state.items[index].total_price
        state.items = state.items.filter(item => item.book.id !== book.book.id)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  }
})

export const { addToCart, updateCart, removeFromCart, clearCart } = CartSlice.actions

export default CartSlice.reducer

export const getTotalQuantity = (state) => {
  return state.cart.items.reduce((total, item) => {
    const quantity = Number(item.quantity);
    if (!isNaN(quantity)) {
      return total + quantity;
    } else {
      return total;
    }
  }, 0);
}