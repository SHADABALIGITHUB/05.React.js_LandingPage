
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Routes/Home/Home'
import About from './Components/Routes/About/About'
import Pricing from './Components/Routes/Pricing/Pricing'
import Features from './Components/Routes/Features/Features'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
     <>
      <BrowserRouter>
           <Navbar/>
         <Routes>
         
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/features" element={<Features/>} />

         </Routes>
           <Footer/>
      </BrowserRouter>


     </>
  )
}

export default App
