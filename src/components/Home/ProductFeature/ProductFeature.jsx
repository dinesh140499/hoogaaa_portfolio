import React, { useEffect } from 'react'
import SectionPara from '../../Common/SectionPara'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'



const ProductFeature = () => {
    useEffect(()=>{
        if(window.pageYOffset>0){
            window.scrollTo({
                top:0,
                behavior:'instant'
            })
        }
    },[])
    return (
        <div className="product-feature section-padding" id="product">
            <div className="container">
                <SectionPara heading={'Redefining Products Features'} para={'User generated content in real-time will have multiple touchpoints for offshoring.'} />
                <div className="row mt-3 gy-5 g-lg-5">
                    <Product icon={"./images/products/Icon1.svg"} title={"Easier Work Organization"} para={"Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. "} />
                    <Product icon={"./images/products/Icon2.svg"} title={"Fast Connection"} para={"Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.  "} />
                    <Product icon={"./images/products/Icon3.svg"} title={"Streamlined Processes"} para={"Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible. "} />
                    <Product icon={"./images/products/Icon4.svg"} title={"Easier Integrations"} para={"Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information."} />
                    <Product icon={"./images/products/Icon5.svg"} title={"Marketing Analytics"} para={"Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate. "} />
                    <Product icon={"./images/products/Icon6.svg"} title={"Workflow Builder"} para={"Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas. "} />

                </div>
            </div>
        </div>
    )
}

const Product = ({ icon, title, para }) => {
    return (
        <>
            <div className="col-md-6 col-lg-4 product-card">
                <div className="icon">
                    <img src={icon} alt={icon} />
                </div>
                <h4 className='mt-3'>{title}</h4>
                <p className='my-2'>{para}</p>
                <Link to="/">Learn More
                    <AiOutlineArrowRight className='ms-2'/>
                </Link>
            </div>
        </>
    )
}


export default ProductFeature