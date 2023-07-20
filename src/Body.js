import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import Nav from './components/Nav'

const Body = () => {
  return (
    <div className="body">
      <Router>
        <Nav />
        <Main />
      </Router>
    </div>
  )
}

export default Body
