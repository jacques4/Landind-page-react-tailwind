import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Prices from './components/Prices'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Router>
     
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <>
             <Navbar />
              <Testimonials />
              <Team />
              <Prices />
              <Newsletter />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
    </div>
  )
}

export default App
