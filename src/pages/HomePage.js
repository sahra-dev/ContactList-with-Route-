import { Link } from 'react-router-dom'
import { IoPeopleSharp , IoPersonAdd} from "react-icons/io5"

const HomePage = () => {
  return (
    <div className="main">
      <h6>
        <Link to="/add-contacts">
          <div className='main-icon'>
            <IoPersonAdd className='icon'/>
          </div>
          <p> Add Contact </p>
        </Link>
        <Link to="/contacts-list">
          <div className='main-icon'>
              <IoPeopleSharp className='icon'/>
        </div>
        <p> Contacts </p>
        </Link>
      </h6>
    </div>
  )
}

export default HomePage
