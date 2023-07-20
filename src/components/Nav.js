// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Nav = () => {
    return ( 
        <nav>
            <h1> Contacts App</h1>
            <ul className='link-list'>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-contacts">Add Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/contacts-list">Contacts List</NavLink>
            </li>
          </ul>
        </nav>
     );
}
 
export default Nav;