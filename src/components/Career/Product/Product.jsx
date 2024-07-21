import { Link, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { CiLocationOn } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'
import { BsBookmarkCheck } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Product = () => {
  const [toggle, setToggle] = useState(false)
  const { title } = useParams()
  const [job,setJob]=useState([])

  useEffect(() => {
    const getJob = async () => {
     try {
      const res= await axios.get('https://hoogaaa.com/hoogaaa/api/v1/action/getjobdata/?jobId=BD45255')
     setJob(res.data.data)
     } catch (error) {
      console.log(error)
     }
    }
    getJob()
  }, [])

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      })
    }
  }, [])
  return (
    <div className="container career-product section-padding mt-5 ">
      <div className="row justify-content-center mt-5 ">
        <div className="col-12">
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex align-items-center gap-3 title">
              <Link to='/career'>
                <AiOutlineArrowLeft />
              </Link>
              <h4 className='mb-0'>{title}</h4>
            </div>
            <div className={toggle ? "bookmark active" : "bookmark "}>
              <BsBookmarkCheck onClick={() => setToggle(!toggle)} />
            </div>
          </div>
          <div className="d-flex align-items-center gap-md-3 gap-lg-4 mt-4 title-bottom-icon flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <HiOutlineBuildingOffice2 />
              <p className='mb-0'>Google</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <CiLocationOn />
              <p className='mb-0'>Mountain View, CA</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <SlCalender />
              <p className='mb-0'>Posted 5 days ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 product-desc">
        <div className="col-12">
          <h4 className='mb-0'>About the business and roles </h4>
          <p className='mb-0 mt-3'>Google is an American multinational technology company that specializes in internet-related services and products. Founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, Google has grown to become one of the most influential and recognizable companies in the world. Founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, Google has grown to become one of the most influential and recognizable companies in the world.</p>
        </div>
        <div className="col-12 desc mt-5">
          <h4 className='mb-0'>Job description</h4>
          <li className='mt-3'>Outline client design objectives.</li>
        
          <li>Conceptualize and sketch design plans.</li>
          <li> Determine cost of completion and project requirements in thebudgeting phase.</li>
          <li>Set a timeline for the completion of an interior design project.</li>
          <li>Source materials and products included in plans.</li>
          <li>Create mood boards to sample your design vision.</li>
          <li>Utilize computer applications in the design process.</li>
          <li>Inspect design after completion to determine whether client goals have been met.</li>
        </div>
        <div className="col-12 desc mt-5">
          <h4 className='mb-0'>Skills and experience</h4>
          <li className='mt-3'>Bachelors degree in design or related field.</li>
          <li>Portfolio of design work.</li>
          <li>Project management experience.</li>
          <li>Experience with computational design.</li>
          <li>Highly creative, imaginative and artistic.</li>
          <li>Excellent communication skills, especially in regard to communicating an artistic vision.</li>
          <li>Proficiency in spatial and conceptual design, Adobe, Corel draw,AutoCAD, Illustrator, Sketch Up or similar design software. </li>
        </div>
      </div>
      <Link to={`/career/product/${title}`} className='careerproduct-btn'>Apply Now</Link>
    </div>
  )
}

export default Product