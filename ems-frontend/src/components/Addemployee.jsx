import React,{useEffect, useState} from 'react'
import { createemployees, getEmployee, updateemployee } from '../service/service'
import { useNavigate,useParams } from 'react-router-dom'

export const Addemployee = () => {
   const [firstName,setfirstname]=useState('')
   const [lastName,setlastname]=useState('')
   const[email,setemail]=useState('')
  
   const{id}=useParams()
   const[errors,seterror]=useState({
    firstName:'',
    lastName:'',
    email:''
   })

  const navigator=useNavigate()

  useEffect(()=>{
       if(id){
         getEmployee(id).then((response)=>{
          setfirstname(response.data.firstName);
          setlastname(response.data.lastName);
          setemail(response.data.email);
        }).catch(error=>{
          console.error(error)
        })
       }
 
  },[id])

   function saveEmployeeorupdate(e)
   {
     e.preventDefault()
    
     if(validateError())
     {
      const employeedetails={firstName,lastName,email}
      if(id)
      {
        updateemployee(id,employeedetails).then(response=>{
          console.log(response.data);
          navigator('/Employees')
        }).catch(error=>{
          console.log(error);
        })
      }
      else
      {
        createemployees(employeedetails).then((Response)=>{
          console.log(Response.data)
          navigator('/Employees')
         }).catch(error=>{
          console.log(error);
        })
      }
    }
    
   }
   function validateError()
   {
    let valid=true;
    const errorcopy={... errors}
   
      if(firstName.trim())
      {
        errorcopy.firstName=''
      }
      else
      {
        errorcopy.firstName='FirstName is required'
        valid=false
      }

      if(lastName.trim())
      {
        errorcopy.lastName=''
      }
      else
      {
        errorcopy.lastName='LastName is Required'
        valid=false
      }
      if(email.trim())
        {
          errorcopy.email=''
        }
        else
        {
          errorcopy.email='email is Required'
          valid=false
        }
        seterror(errorcopy);
        return valid;
   }   
  function pagetitle()
  {
    if(id)
    {
        return <h2 className='text-center'>Update Employee</h2>
    }
    else
    {
      return <h2 className='text-center'>Add Employee</h2>
      
    }
  }
  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pagetitle()
          }
           <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                   <label className='form-label'>FirstName:</label>
                   <input
                   type='text'
                   placeholder="Enter first name"
                   name="firstName"
                   value={firstName}
                   className={`form-control ${errors.firstName?'is-invalid':''}`}
                   onChange={(e)=>setfirstname(e.target.value)}
                   >
                   </input>
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>
              <div className='form-group mb-2'>
                   <label className='form-label'>LastName:</label>
                   <input
                   type='text'
                   placeholder="Enter last name"
                   name="lastName"
                   value={lastName}
                   className={`form-control ${errors.lastName?'is-invalid':''}`}
                   onChange={(e)=>setlastname(e.target.value)}
                   >
                   </input>
                   {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>
              <div className='form-group mb-2'>
                   <label className='form-label'>Email:</label>
                   <input
                   type='email'
                   placeholder="Enter email"
                   name="email"
                   value={email}
                   className={`form-control ${errors.email?'is-invalid':''}`}
                  onChange={(e)=>setemail(e.target.value)} 
                   >
                   </input>
                   {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <button className='btn btn-success' onClick={saveEmployeeorupdate}>Submit</button>
            </form>
           </div>
        </div>
      </div>
    </div>
  )
}
