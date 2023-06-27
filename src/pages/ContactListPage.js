import Contacts from '../components/Contacts'

const ContactListPage = ({ contacts, deleteHandler, showContact, editPostHandler}) => {
  return (
    <>
      <div className=" main">
        <Contacts
          contacts={contacts}
          deleteHandler={deleteHandler}
          clickHandler={showContact}
          editPostHandler={editPostHandler}
        />
      </div>
    </>
  )
}

export default ContactListPage
