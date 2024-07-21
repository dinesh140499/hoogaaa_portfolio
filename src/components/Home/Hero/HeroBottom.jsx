import React from 'react'

const HeroBottom = () => {
    return (
        <div className="container hero-bottom section-padding">
            <div className="row gy-3">
                <div className="col-md-6 col-lg-3">
                    <Card  title={"Support & Assistance"} para={'24/7 dedicated support for a smooth experience.'}/>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Card  title={"User-friendly Interface"} para={'Intuitive design for easy navigation and management.'}/>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Card total={'20k'} title={"Benefits"} para={'Experience increased efficiency, security, and resource optimization.'}/>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Card total={'35k'} title={"Server Monitoring"} para={'Real-time server health monitoring for uninterrupted performance.'}/>
                    {/* <Card total={'35k'} title={"Server Monitoring"} para={'Real-time server health monitoring for uninterrupted performance.'}/> */}
                </div>
            </div>
        </div>
    )
}

const Card = ({para,title}) => {
    return (
        <>
            <h4>{title}</h4>
            <p>{para}</p>
        </>
    )
}

export default HeroBottom