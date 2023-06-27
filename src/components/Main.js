import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AddContactPage from '../pages/AddContactPage'
import ContactListPage from '../pages/ContactListPage'
import HomePage from '../pages/HomePage'
import Contact from './Contact'
import http from '../Services/httpServices'


const Main = () => {
  const [contacts, setContacts] = useState([])
  const postHandler = async (info) => {
    try {
      await http.post('/contacts', {
        ...info,
        // id: new Date().getTime(),
      })
      const contacts1 = await http.get('/contacts')
      setContacts(contacts1.data)
      // console.log(contacts1.data);
    } catch (error) {
      console.log(error)
    }
  }
  const deleteHandler = async (id) => {
    try {
      await http.delete(`/contacts/${id}`)
      const contacts1 = await http.get('/contacts')
      // console.log(contacts1.data);
      setContacts(contacts1.data)
    } catch (error) {
      console.log(error.name)
    }
  }
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contacts1 = await http.get('/contacts')

        setContacts(contacts1.data)
      } catch (error) {
        console.log(error.name)
      }
    }
    getContacts()
  }, [])
  const editPostHandler = async(info)=>{
    // console.log(info);
    //! in doroste ama sorate khobi ndre
    // await deleteHandler(info.id)
    // await postHandler(info)
    // => in bhtre
    await http.put(`/contacts/${info.id}` , { name : info.name , email : info.email})
    const contact1 = await http.get('/contacts')
    // console.log(contact1.data);
    setContacts(contact1.data)
   
  }

  return (
    // <div className="main">
    //   <AddContact postHandler={postHandler} />
    //   <Contacts contacts={contacts} deleteHandler={deleteHandler}/>
    // </div>
    <Switch>
      <Route
        path="/user/:id"
        render={(props)=>(
          <Contact {...props} />
        )}/>
      <Route
        path="/add-contacts"
        render={(props) => (
          <AddContactPage postHandler={postHandler} {...props} />
        )}
      />
      <Route
        path="/contacts-list"
        render={(props) => (
          <ContactListPage
            contacts={contacts}
            deleteHandler={deleteHandler}
            editPostHandler={editPostHandler}
            {...props}
          />
        )}
      />
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
    </Switch>
  )
}

export default Main
