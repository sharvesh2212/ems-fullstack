import React ,{useState,useEffect} from 'react'
import { deleteEmployee, listemployees } from '../service/service'
import { useNavigate } from 'react-router-dom'


const EmployeeListComponents = () => {
 const [employees,setemployess]=useState([])
 const navigator=useNavigate()
 
 useEffect(()=>{
    fetchemployee()

 },[])
 
 function fetchemployee()
 {
  listemployees().then(response=>{
    setemployess(response.data)
}).catch(error=>{
    console.error(error);
})
 }
 function addnewemployee()
 {
     navigator('/Addemployee')
 }
 function updateEmployee(id)
 {
  navigator(`/editemployee/${id}`)
 }  
 function  removeEmployee(id)
 {
          deleteEmployee(id).then(response=>{
            fetchemployee()
          }).catch(error=>{
            console.log(error)
          })
 }
  return (
    <div className='container'>
        <h2 className='text-center'>ListEmployeeComponents</h2>
        <button type='button' className="btn btn-success mb-2" onClick={addnewemployee}>AddNewEmployee</button>
       <table className="table table-striped table-bordered ">
              <thead>
                   <tr>
                      <th>id</th>
                      <th>firstname</th>
                      <th>lastname</th>
                      <th>emailid</th>
                      <th>edit</th>
                   </tr>
              </thead>
              <tbody>
                   {
                     employees.map(data=>
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>
                              <button className='btn btn-info' onClick={()=>updateEmployee(data.id)}>Edit</button>
                              <button className='btn btn-danger' onClick={()=>removeEmployee(data.id)}>Delete</button>
                            </td>
                            
                        </tr>
                     )
                   }
              </tbody>
       </table>
    </div>
  )
}

export default EmployeeListComponents