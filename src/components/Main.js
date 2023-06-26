import { useEffect, useState } from 'react'
import AddContact from './AddContact'
import axios from 'axios'
import Contacts from './Contacts'

const Main = () => {
  const [contacts , setContacts] = useState([])
  const postHandler =async (info)=>{
    try {
      await axios.post('http://localhost:3003/contacts' , {
        ...info ,
        id : Math.random()
      })
      const contacts1 = await axios.get('http://localhost:3003/contacts')
      setContacts(contacts1.data)
      console.log(contacts1.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteHandler =async (id)=>{
    try {
      await axios
      .delete(`http://localhost:3003/contacts/${id}`)
      const contacts1 =  await axios.get('http://localhost:3003/contacts')
      // console.log(contacts1.data);
      setContacts(contacts1.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    const getContacts = async ()=>{
      try {
        const contacts1 = await axios.get('http://localhost:3003/contacts')
        // console.log(contacts1.data);
        setContacts(contacts1.data)
      } catch (error) {
        console.log(error);
      }
    }
    getContacts()
  },[])
  return (
    <div className="main">
      <AddContact postHandler={postHandler} />
      <Contacts contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Main
