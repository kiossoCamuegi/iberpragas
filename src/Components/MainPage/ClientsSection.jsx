import React from 'react'
import Slider from "react-slick";


function ClientsSection() {
    const settings = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

  return (
    <div  className='client-section' >
        <div className="wrapper">
            <div className="content">
              <Slider {...settings}>
                 <article><img src="http://rsb.rudhisasmito.com/pestco/wp-content/uploads/sites/3/2023/10/dummy-logo-1b.png" alt="" /></article>
                 <article><img src="http://rsb.rudhisasmito.com/pestco/wp-content/uploads/sites/3/2023/10/dummy-logo-2b.png" alt="" /></article>
                 <article><img src="http://rsb.rudhisasmito.com/pestco/wp-content/uploads/sites/3/2023/10/dummy-logo-3b.png" alt="" /></article>
                 <article><img src="http://rsb.rudhisasmito.com/pestco/wp-content/uploads/sites/3/2023/10/dummy-logo-4b.png" alt="" /></article>
                 <article><img src="http://rsb.rudhisasmito.com/pestco/wp-content/uploads/sites/3/2023/10/dummy-logo-5b.png" alt="" /></article>
                 <article><img src="http://rsb.rudhisasmito.com/pestco/wp-content/uploads/sites/3/2023/10/dummy-logo-6b.png" alt="" /></article>          
               </Slider> 
            </div>
        </div>
    </div>
  )
}

export default ClientsSection
