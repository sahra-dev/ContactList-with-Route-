import { BsFillPersonFill, BsFillTrash3Fill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AddContact from './AddContact'

const Contacts = ({ contacts, deleteHandler,  editPostHandler}) => {
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  // console.log((contacts));
  const renderContacts = contacts.map((item) => {
    const { id, name, email } = item
    return (
      <Link key={id} to={{ pathname: `/user/${id}`, state: { item } }}>
        <li>
          <div className="contact">
            <div className="contact-info">
              <BsFillPersonFill className="profile-icon" />
              <div>
                <p className="profile-name">{name}</p>
                <p className="profile-email"> {email}</p>
              </div>
            </div>
            <div className="icons">
              <AiFillEdit
                className="edit-icon"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setEdit(true)
                  setId(id)
                }}
              />
              <BsFillTrash3Fill
                className="trash-icon"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  deleteHandler(id)
                }}
              />
            </div>
          </div>
        </li>
      </Link>
    )
  })

  const render = () => {
    if (edit) {
      return (
        <AddContact
          edit={edit}
          setEdit={setEdit}
          contact={contacts.find((item) => item.id === id)}
          editPostHandler={editPostHandler}
        />
      )
    } else if (contacts.length > 0) {
      return renderContacts
    } else {
      return <p style={{ fontSize: '2rem' }}> Contact List Is Empty ...</p>
    }
  }
  return (
    <>
      <div className="contact-section">
        <ul>{render()}</ul>
      </div>
    </>
  )
}

export default Contacts
