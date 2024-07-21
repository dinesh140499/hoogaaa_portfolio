import React, { useState } from 'react'
import SectionPara from '../../Common/SectionPara'


import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import Button from '../../Common/Button'
import { useNavigate } from 'react-router-dom'




const Question = () => {
    const navigate = useNavigate()
    return (
        <div className="container section-padding question">
            <SectionPara heading={'Frequently asked questions'} para={'Everything you need to know about the product and billing.'} />
            <div className="row justify-content-center mt-3 gy-5 g-lg-5 p-3">
                <div className="col-lg-8">
                    <QuestionCard ques={"Is there a free trial available?"} ans={"Yes, you can try us for free for 30 days."} />
                    <QuestionCard ques={"Can I change my plan later?"} ans={"Yes, you can change your plan later."} />
                    <QuestionCard ques={"What is your cancellation policy?"} ans={"Depending on the stage of the project or the type of service. "} />
                    <QuestionCard ques={"Can other info be added to an invoice?"} ans={"Yes, For ongoing projects or services, you can include a summary of the agreed-upon scope of work and deliverables."} />
                    <QuestionCard ques={"How does billing work?"} ans={"Billing starts with the delivery of a product or service to the customer. This could be the completion of a project, the sale of a product, or the provision of ongoing services."} />
                   
                </div>
            </div>
            <div className="row contact-question mt-5 p-5 justify-content-center">
                <div className="col-lg-8">
                    <div className="img-box mx-auto d-flex justify-content-center align-items">
                        <img src="./images/avatar-group.png" alt="avatar-group" />
                    </div>
                    <h4>Still have questions?</h4>
                    <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Button bgcolor={"#397F83"} tcolor={"#fff"} shadow={"0 1px 3px rgba(0,0,0,0.4)"} children={"Contact Us"} myFun={()=>navigate('/contact')}/>
                </div>
            </div>
        </div>
    )
}

const QuestionCard = ({ ques, ans }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="question-card py-3">
            <div>
                <h4>{ques}</h4>
                {toggle ? <AiOutlineMinusCircle onClick={() => toggle === false ? setToggle(true) : setToggle(false)} /> : <AiOutlinePlusCircle onClick={() => toggle === false ? setToggle(true) : setToggle(false)} />}
            </div>
            <p className={toggle ? 'ans active' : 'ans'}>{ans}</p>
        </div>
    )
}


export default Question