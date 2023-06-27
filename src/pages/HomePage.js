import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="main">
      <h1> It's Contact List Application ... !</h1>
      <h4>
        <Link to="/add-contacts"> Go To AddContact Page ...</Link>
        <Link to="/contacts-list"> Go to ContactsList Page ...</Link>
      </h4>
    </div>
  )
}

export default HomePage
