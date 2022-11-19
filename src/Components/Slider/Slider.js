import React from 'react'

function Slider() {
  return (
    <div className='mt-5'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg
" className="d-block" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg
" className="d-block" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" className="d-block" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
 className="d-block" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Slider