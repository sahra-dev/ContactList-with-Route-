import { useEffect, useState } from 'react'

const AddContact = ({postHandler, editPostHandler , edit, setEdit ,contact}) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
  })
  useEffect(()=>{
    edit ? setInfo(contact) : setInfo({ name : '' , email : ''})
  },[])

  const submitHandler = (e) =>{
      e.preventDefault()
      if(!info.name){
        alert('please fill the name ')
      } else if ( !info.email){
        alert('please fill the email')
      }else{
        if(edit){
          editPostHandler(info)
          setEdit(false)
          }else{
            postHandler(info)
          }
        }
      setInfo({
        name: '',
        email: '',
      })
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
      <p className="title"> { edit ? `Edit Contact with id : ${contact.id}` : "Add Contact"} </p>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="name"> Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Name ..."
          value={ info.name}
          onChange={changeHandler}
        />
        <label htmlFor="email"> Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          value={ info.email}
          onChange={changeHandler}
        />
        <div className='btns'>
        <button className="btn" type='submit' >
          { edit ? "Edit" : "Add Contact"}
        </button>
        { edit ? <button className="btn btn-cncl" onClick={()=> setEdit(false)} >
          Cancel
        </button> : null}
        </div>
      </form>

    </>
  )
}

export default AddContact
