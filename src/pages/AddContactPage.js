import AddContact from "../components/AddContact";

const AddContactPage = ({postHandler }) => {
    return ( 
        <>
        <div className="main">
            <AddContact postHandler={postHandler} />
        </div>
        </>
     );
}
 
export default AddContactPage;