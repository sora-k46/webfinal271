import React from 'react'
import { useSelector } from 'react-redux'
import { CardText, Button, Card, CardImg, CardTitle, CardBody } from 'reactstrap'

function CartPage() {
  const cart = useSelector((state) => state.cart)
  return (
    <div style={{ height: '90vh' }} className='container'>
      <div className="row">
          <p>Your order right now : {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
          {cart.length === 0 ? <p>Cart is Empty</p> : cart.map((dish) => {
            return (
              <Card key={dish.id} className='col-12 col-md-3 my-3' >
                <CardImg src={dish.image} alt={dish.name} />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>Price: {dish.price} Baht</CardText>
              </Card>
            )
          })}
      </div>
    </div>
  )
}

export default CartPage