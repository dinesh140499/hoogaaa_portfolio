import React from 'react'
import Hero from './Hero/Hero'
import HeroBottom from './Hero/HeroBottom'
import ProductFeature from './ProductFeature/ProductFeature'
import Services from './Services/Services'
import Customer from './Customer/Customer'
import Question from './Questions/Question'
import GetInTouch from './GetInTouch/GetInTouch'

const Home = () => {
    return (
        <>
            <Hero />
            <HeroBottom />
            <ProductFeature />
            <Services />
            <Customer />
            <Question />
            <GetInTouch />
        </>
    )
}

export default Home