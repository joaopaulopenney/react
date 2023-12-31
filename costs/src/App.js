import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/company' element={<Company />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/newproject' element={<NewProject />}></Route>
            <Route path='/project/:id' element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
