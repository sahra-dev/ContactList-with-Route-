import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Contact = (props) => {
   //  console.log(props.location.state.item);
    const item = props.location.state.item
    return ( 
        <div className="main main-contact" >
           <p> {item.name} </p>
           <p> { item.email}</p>
           <Link to='/contacts-list' style={{marginTop : '3rem'}}> go to ContactList</Link>
        </div>
     );
}
 
export default Contact;