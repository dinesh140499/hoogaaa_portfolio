import React from 'react'
import SectionPara from '../../Common/SectionPara'

const AboutBottom = () => {
    return (
        <div className="container-fluid about-bottom section-padding">
            <SectionPara topheading={"Join 4,000+ companies already growing"}/>
            <div className="row gy-3 align-items-center justify-content-lg-center">
                <Card img={'images/Hero/layers.png'} para={'Layer'} />
                <Card img={'images/Hero/sisyphus.png'} para={'Sisphus'} />
                <Card img={'images/Hero/circooles.png'} para={'Circooles'} />
                <Card img={'images/Hero/catalog.png'} para={'Catalog'} />
                <Card img={'images/Hero/quotient.png'} para={'Quotient'} />
            </div>
        </div>
    )
}

const Card = ({ img, para }) => {
    return (
        <>
            <div className="col-sm-6 col-md-6 col-lg-2">
                <div className='d-flex align-items-center justify-content-center'>
                    <div className="imgbox">
                        <img src={img} alt='company' width={"80%"} height={"80%"}/>
                    </div>
                    <p className='mb-0'>{para}</p>
                </div>
            </div>
        </>
    )
}
export default AboutBottom