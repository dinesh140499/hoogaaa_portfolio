import React, { useEffect, useState } from 'react'
import SectionPara from '../Common/SectionPara'
import Button from '../Common/Button'
import data from './productjson/OurProduct'
import { Link } from 'react-router-dom'

const OurProduct = () => {
  const [product] = useState(data)
  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    }
  }, [])
  return (
    <div className="container ourproduct section-padding text-center mt-5">
      <Button children={'Our Products'} bgcolor={'#f3fbfc'} tcolor={'#397f83'} />
      <SectionPara heading={'Our Product Collection'} para={'Discover an extensive collection of innovative and high-quality products designed to enhance your life and meet your diverse needs.'} />
      <div className="row mt-5 text-lg-start justify-content-center">
        <div className="col-12">
          <div className="row p-1 g-5 justify-content-center">
            {product.map(prod => {
              const { id, image, para, title, link, coming_soon } = prod
              return (
               
                <div className='col-lg-4' key={id}>
                  <Link to={link} target={coming_soon?"":"_blank"}>
                  <article className={'card'} style={coming_soon?{cursor:"default"}:{cursor:"pointer"}}>
                    <header className="card__thumb">
                        <img src={image} alt={title}/>
                    </header>
                   
                    <div className="card__body">
                      {coming_soon?<div className="card__category">
                       {coming_soon}
                      </div>:''}
                      <h2 className="card__title">
                      {title}
                      </h2>
                      <p className="card__description">
                        {para}
                      </p>
                    </div>

                  </article>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProduct