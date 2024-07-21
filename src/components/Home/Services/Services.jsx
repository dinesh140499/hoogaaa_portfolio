import React from 'react'
import SectionPara from '../../Common/SectionPara'



const Services = () => {
    return (
        <div className='container section-padding service'>
            <SectionPara heading={'Our Services'} para={'Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.'} />
            <div className="row mt-3 gy-5  g-lg-5 align-items-center justify-content-center">
                <div className="col-lg-6 service-left">
                    <div className="service-img">
                        <img src='images/Services/Photo.svg' alt="services-prices" className='img-fluid' />
                    </div>
                </div>
                <div className="col-lg-6 service-right">
                    <div className="row g-3 g-lg-5 justify-content-center">
                        <ServiceCard img={"images/Services/Icon-1.svg"} title={"Great Design"} para={"Exquisite designs that captivate and inspire, exceeding expectations flawlessly."} />
                        <ServiceCard img={"images/Services/Icon-2.svg"} title={"Easy To Use"} para={"Seamless and user-friendly service for effortless experiences."} />
                        <ServiceCard img={"images/Services/Icon-3.svg"} title={"Happy Customers"} para={"Satisfied smiles, our happy customers are our biggest reward."} />
                        <ServiceCard img={"images/Services/Icon-4.svg"} title={"Another Feature"} para={"Innovative functionalities that redefine user experiences with ingenuity"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ServiceCard = ({ img, title, para }) => {
    return (
        <>
            <div className="col-12 col-sm-5 service-card">
                <img src={img} alt="icon-1" />
                <h4 className='mt-3'>{title}</h4>
                <p className='my-2'>{para}</p>
            </div>
        </>
    )
}



export default Services