import { BsFillPersonFill, BsFillTrash3Fill } from 'react-icons/bs'

const Contacts = ({contacts , deleteHandler}) => {
  // console.log((contacts));
  const renderContacts = contacts.map( item =>{
    const {id , name , email} = item
    return(
      <li key={id}>
            <div className="contact">
              <div className="contact-info">
                <BsFillPersonFill className="profile-icon" />
                <div>
                <p className="profile-name">{name}</p>
                <p className='profile-email'> {email}</p></div>
              </div>
              <BsFillTrash3Fill className="trash-icon" onClick={() => deleteHandler(id)}/>
            </div>
          </li>
    )
  })
  return (
    <>
      <div className="contact-section">
        <ul>
          {renderContacts}
        </ul>
      </div>
    </>
  )
}

export default Contacts
