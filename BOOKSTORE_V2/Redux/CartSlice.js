
import { createSlice } from '@reduxjs/toolkit'
export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {

    addToCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.book.id === book.book.id)
      if (index >= 0) {
        
        state.items[index].quantity += Number(book.quantity)
        state.total -=  state.items[index].total_price;
        console.log(Number( state.items[index].pricesale> 0 ? state.items[index].quantity * state.items[index].pricesale : state.items[index].quantity * state.items[index].price))
        state.items[index].total_price = Number( state.items[index].pricesale> 0 ? state.items[index].quantity * state.items[index].pricesale : state.items[index].quantity * state.items[index].price)
        state.total +=  state.items[index].total_price;
      } else {
        state.items.push({
          book: book.book,
          price: Number(book.price),
          pricesale: Number(book.pricesale),
          quantity: Number(book.quantity),
          total_price: Number(book.quantity) * (Number(book.pricesale) > 0 ? Number(book.pricesale) : Number(book.price))
        })
        const total_price = Number(book.quantity) * (Number(book.pricesale) > 0 ? Number(book.pricesale) : Number(book.price))
        state.total += total_price;
      }
    
    },

    updateCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.book.id === book.book.id)
      if (index >= 0) {

        state.total -=  state.items[index].total_price;
        // state.total -= Number(state.items[index].quantity) * (Number(state.items[index].pricesale) > 0 ? Number(state.items[index].pricesale) : Number(state.items[index].price))
        //update
        state.items[index].quantity = Number(book.quantity)
        state.items[index].total_price = Number(state.items[index].quantity) * (Number(state.items[index].pricesale) > 0 ? Number(state.items[index].pricesale) : Number(state.items[index].price))
        state.total += Number(state.items[index].total_price)

      }
    },
    
    removeFromCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.book.id === book.book.id)
      if (index >= 0) {
        state.total -= Number(state.items[index].total_price)
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