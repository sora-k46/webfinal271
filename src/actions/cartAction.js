export const ADD = 'ADD'

export function addToCart(product) {
  return {
    type: ADD,
    payload: product
  }
}