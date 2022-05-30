import React from 'react'

function Footer() {
  return (
    <div className='footer d-flex align-items-center p-3 justify-content-center'>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-6 col-12">
            <address>
              119/35 Street name, City name
              State name and Country name
              149999
            </address>
          </div>
          <div className="col-md-6 col-12">
            <ul className='d-flex gap-5'>
              <li><a href="https://www.youtube.com"><span className='fa fa-youtube fa-lg'></span> Youtube</a></li>
              <li><a href="https://www.facebook.com"><span className='fa fa-facebook fa-lg'></span> Facebook</a></li>
              <li><a href="https://www.instagram.com"><span className='fa fa-instagram fa-lg'></span> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer