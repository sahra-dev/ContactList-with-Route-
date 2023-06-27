import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'

const Body = () => {
  return (
    <div className="body">
      <Router>
        <Nav />
        <Main />
      </Router>
      <Footer />
    </div>
  )
}

export default Body
