import SectionPara from '../../Common/SectionPara'



const Customer = () => {
    return (
        <div className='customer section-padding'>
            <div className="container">
                <SectionPara heading={'What Our Customers Say'} para={'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.'} />
                <div className="row mt-3 gy-5 g-lg-5">
                    <CustomerCard para={"“Thank you for making it painless, and pleasant and most of all hassle free! I love Hoogaaa. I can't say enough about Hoogaaa.”"} uimg={"images/Customer/avatar-1.svg"} uname={"Dave Jones"} uprofession={"CEO"}/>
                    <CustomerCard para={"“Wow what great service, I love it! Hoogaaa is great. Hoogaaa has surpassed our expectations. I use this often.”"} uimg={"images/Customer/avatar-2.svg"} uname={"Andrew Drue"} uprofession={"UI/UX Designer"}/>
                    <CustomerCard para={"“I could probably go into sales for you. The service was excellent. The service was excellent. Great job, I will definitely again!”"} uimg={"images/Customer/avatar-3.svg"} uname={"Olivia Manson"} uprofession={"Project Manager"}/>
                    <CustomerCard para={"““Message then already cc uat. Me optimal on agile lean our key. Last solutions guys version goalposts close. Social supervisor fured.”"} uimg={"images/Customer/avatar-4.svg"} uname={"Travis Ryan"} uprofession={"Supervisor"}/>
                </div>
            </div>
        </div>
    )
}

const CustomerCard = ({para,uimg,uname,uprofession}) => {
    return (
        <div className="col-md-6 col-lg-3 customer-card">
            <img src="images/Customer/Icon.svg" alt="quote" className='img-fluid'/>
            <p className="mt-3">{para}</p>
            <div className="d-flex align-items-center gap-3">
                <img src={uimg} alt={uname} />
                <div>
                    <p className="mb-0">{uname}</p>
                    {/* <span className="text-uppercase">{uprofession}</span> */}
                </div>
            </div>
        </div>
    )
}

export default Customer