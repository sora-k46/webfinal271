import React from 'react'
import { CardText, Button, Card, CardImg, CardTitle, CardBody } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'

function OrderPage(props) {
  const dispatch = useDispatch()
  const dishes = props.dishes.map((dish) => {
    return (
      <Card key={dish.id} className='col-12 col-md-3 my-3'>
        <CardImg src={dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>Price: {dish.price} Baht</CardText>
        <Button color='primary' onClick={() => dispatch(addToCart({ ...dish, quantity: 1 }))} >Add to Cart</Button>
      </Card>
    )
  })
  return (
    <div className="container">
      <div className="row">
        {dishes}
      </div>
    </div>
  )
}

export default OrderPage