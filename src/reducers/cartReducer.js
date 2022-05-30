import { ADD } from "../actions/cartAction"

const initialState = {
  cart: []
}

export function cartReducer(state = initialState, action) {
  switch(action.type) {
    case ADD:
      const updatedState = [...state.cart, action.payload]
      return {
        ...state,
        cart: updatedState,
      }
    default:
      return state
  }
}