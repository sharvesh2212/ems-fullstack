import axios from "axios"

const base_url="http://localhost:8080/api/Employees";
 
export const listemployees=()=>axios.get(base_url);
 
export const createemployees=(employee)=>axios.post(base_url,employee);
 
export const getEmployee =(employeeid)=>axios.get(base_url+'/'+employeeid);

export const updateemployee =(employeeid,employee)=>axios.put(base_url+'/'+employeeid,employee)

export const deleteEmployee =(id)=>axios.delete(base_url+'/'+id)