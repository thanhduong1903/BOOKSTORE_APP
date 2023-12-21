
import { createSlice } from '@reduxjs/toolkit'
export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.id === book.id)
      if (index >= 0) {
        state.items[index].quantity += 1
      } else {
        state.items.push(book)
      }
    },
    updateCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.id === book.id)
      if (index >= 0) {
        state.total -= state.items[index].price * state.items[index].quantity
        state.items[index].quantity = book.quantity
        state.total += state.items[index].price * state.items[index].quantity
      }
    },
    removeFromCart: (state, action) => {
      const book = action.payload;
      const index = state.items.findIndex(item => item.id === book.id)
      if (index >= 0) {
        state.total -= state.items[index].price * state.items[index].quantity
        state.items = state.items.filter(item => item.id !== book.id)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
    getTotalQuantity: (state) => {
      return state.items.reduce((total, item) => {
        const quantity = Number(item.quantity);
        if (!isNaN(quantity)) {
          return total + quantity;
        } else {
          return total;
        }
      }, 0);
    }
  }
})

export const { addToCart, updateCart, removeFromCart, clearCart, getTotalQuantity } = CartSlice.actions

export default CartSlice.reducer