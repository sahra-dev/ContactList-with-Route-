import { BsFillPersonFill, BsFillTrash3Fill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddContact from './AddContact'
import http from '../services/httpServices'
import Loading from './loadingCmp/Loading'

const Contacts = () => {
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  const [value, setValue] = useState('')
  const [contacts, setContacts] = useState([])
  const [allContacts, setAllContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contacts1 = await http.get('/contacts')
        setContacts(contacts1.data)
        setAllContacts(contacts1.data)
      } catch (error) {
        console.log(error.name)
      }
    }
    getContacts()
  }, [])
  const deleteHandler = async (id) => {
    try {
      await http.delete(`/contacts/${id}`)
      const contacts1 = await http.get('/contacts')
      setContacts(contacts1.data)
    } catch (error) {
      console.log(error.name)
    }
  }
  const editPostHandler = async (info) => {
    await http.put(`/contacts/${info.id}`, {
      name: info.name,
      email: info.email,
    })
    const contact1 = await http.get('/contacts')
    setContacts(contact1.data)
  }
  const searchHandler = (e) => {
    const value1 = e.target.value
    setValue(value1)
    if (value1 !== '') {
      const filtered = allContacts.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .trim()
          .includes(value1.toLowerCase().trim())
      })
      setContacts(filtered)
    } else {
      setContacts(contacts)
    }
  }
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
      return <Loading />
    }
  }

  return (
    <>
      <div className="contact-section">
        { edit ? '' : 
      <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={searchHandler}
            value={value}
          />
        </div>}
        <ul>
          {render()}
          {/* <Loading /> */}
          </ul>
      </div>
    </>
  )
}

export default Contacts
