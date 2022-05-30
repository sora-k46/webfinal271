import React from 'react'
import { DISHES } from '../shared/dishes'
import { Card, CardTitle, CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderGallery(props) {
  const dishes = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-4 my-3">
        <Link to={`/photo/${dish.id}`} style={{textDecoration: 'none'}}>
          <Card style={{ height: '30rem' }} >
            <CardImg src={dish.image} alt={dish.name} height='auto' />
            <CardTitle tag='h5' className='text-center'>{dish.name}</CardTitle>
          </Card>
        </Link>
      </div>
    )
  })
  return (
    <div className="row">
      {dishes}
    </div>
  )
}

function PhotoPage() {
  return (
    <div className="container">
      <div className="row my-5">
        <h3>My Photo Gallery</h3>
        <hr />
      </div>
      <RenderGallery dishes={DISHES} />
    </div>
  )
}

export default PhotoPage