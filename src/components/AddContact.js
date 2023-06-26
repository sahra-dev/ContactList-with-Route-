import { useState } from 'react'

import axios from 'axios'

const AddContact = ({postHandler}) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
  })

  const submitHandler = (e) =>{
      e.preventDefault()
      if(!info.name){
        alert('please fill the name ')
      } else if ( !info.email){
        alert('please fill the email')
      }else{
        postHandler(info)
      setInfo({
        name: '',
        email: '',
      })
      }
      
  }
  const changeHandler = (e) => {
    // console.log(e.target.name);
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    })
  }
  
  
  return (
    <>
      <p className="title"> Add Contact </p>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="name"> Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Name ..."
          value={info.name}
          onChange={changeHandler}
        />
        <label htmlFor="email"> Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          value={info.email}
          onChange={changeHandler}
        />
        <button className="btn" type='submit' >
          Add Contact
        </button>
      </form>

    </>
  )
}

export default AddContact
