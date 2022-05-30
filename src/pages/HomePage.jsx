import React from 'react'
import { CardImg, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import { DISHES } from '../shared/dishes'

function RenderOnFeature({ dishes }) {
  const featured = dishes.filter((dish) => dish.featured)
  const renderFeature = featured.map((dish) => {
    return (
      <div key={dish.id} >
        <CardTitle tag="h5">{dish.name}</CardTitle>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <details>
            <summary>{dish.name}</summary>
            <CardText>{dish.description}</CardText>
          </details>
        </CardBody>
      </div>
    )
  })
  return renderFeature
}

function RenderOnSale({ dishes }) {
  const sale = dishes.filter((dish) => dish.onSale)
  const renderSale = sale.map((dish) => {
    return (
      <div key={dish.id} >
        <CardTitle tag="h5">{dish.name} is on sale {dish.discount}%!</CardTitle>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <details>
            <summary>{dish.name}</summary>
            <CardText>{dish.description}</CardText>
          </details>
        </CardBody>
      </div>
    )
  })
  return renderSale
}

function HomePage() {
  return (
    <div className="container">
      <div className="mt-4 p-5 bg-success text-white rounded">
        <h1>Are you hungry?</h1>
        <p>Have a look at our restaurant! And order from online website get discount! </p>
      </div>
      <div className="row m-5">
        <h2>Recommended!</h2>
        <hr />
        <div className="col-12 col-md-6">
          <Card className='p-3 m-3'>
            <RenderOnFeature dishes={DISHES} />
          </Card>
        </div>
      </div>
      <div className="row m-5">
        <h2>Breaking News!</h2>
        <hr />
        <div className="col-12 col-md-6">
          <Card className='p-3 m-3'>
            <RenderOnSale dishes={DISHES} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomePage