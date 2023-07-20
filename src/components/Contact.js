import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { IoMdContact } from "react-icons/io";

const Contact = (props) => {
   //  console.log(props.location.state.item);
    const item = props.location.state.item
    return ( 
        <div className="main main-contact" >
         <IoMdContact className="main-contact_img"/>
           <p> {item.name} </p>
           <p> { item.email}</p>
           <Link to='/contacts-list' style={{marginTop : '3rem'}}>Back...</Link>
        </div>
     );
}
 
export default Contact;