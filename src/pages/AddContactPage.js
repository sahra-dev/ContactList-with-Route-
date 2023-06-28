import AddContact from "../components/AddContact";

const AddContactPage = ({ ...props}) => {
    return ( 
        <>
        <div className="main">
            <AddContact props={props}/>
        </div>
        </>
     );
}
 
export default AddContactPage;