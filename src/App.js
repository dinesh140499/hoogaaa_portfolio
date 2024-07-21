import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Common/Navbar/Navbar'
import Home from './components/Home/Home'
import OurProduct from './components/OurProduct/OurProduct'
import About from './components/About/About'
// import Career from './components/Career/Career'
// import Product from './components/Career/Product/Product'
import PersonalInfo from './components/Career/Personal/PersonalInfo'
import Contact from './components/Contact/Contact'
import Footer from './components/Common/Footer/Footer'
import Terms from './components/Terms&Condition/Terms'
import Privacy from './components/Terms&Condition/Privacy'
import Analytics from './components/Common/Footer/Analytics'
import Automation from './components/Common/Footer/Automation'
import Cloud from './components/Common/Footer/Cloud'
import ProductEg from './components/Common/Footer/ProductEg'
import PageNotFound from './components/Common/PageNotFound/PageNotFound'





// Home
import './styles/common/app.scss'
import './styles/common/navbar.scss'
import './styles/home/productfeature.scss'
import './styles/home/service.scss'
import './styles/home/customer.scss'
import './styles/home/question.scss'
import './styles/home/getintouch.scss'

// Product
import './styles/product/productpage.scss'

// common 
import './styles/common/footer.scss'
import './styles/common/sectionpara.scss'
import './styles/common/button.scss'
import './styles/home/hero.scss'
import './styles/common/terms.scss'
import './styles/common/pagenotfound.scss'


// About
import './styles/about/aboutbg.scss'
import './styles/about/aboutbottom.scss'
import './styles/about/team.scss'
import './styles/about/work.scss'

// Career
import './styles/career/careerhome.scss'
import './styles/career/careerproduct.scss'
import './styles/career/personalinfo.scss'



// Contact
import './styles/contact/contact.scss'


const App = () => {


  return (
    <>
      <Router>
        {/* <GoTop/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<OurProduct />} />
          <Route path='/career' element={<PersonalInfo />} />
          {/* <Route path='/career' element={<Career />} /> */}
          {/* <Route path='/career/:title' element={<Product />} />
          <Route path='/career/product/:type' element={<PersonalInfo />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<Terms/>}></Route>
          <Route path='/analytics' element={<Analytics/>}></Route>
          <Route path='/product-engineering' element={<ProductEg/>}></Route>
          <Route path='/cloud' element={<Cloud/>}></Route>
          <Route path='/automation' element={<Automation/>}></Route>
          <Route path='/privacy' element={<Privacy/>}></Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
