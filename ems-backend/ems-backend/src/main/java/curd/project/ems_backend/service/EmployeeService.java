package curd.project.ems_backend.service;

import curd.project.ems_backend.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService
{
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO GetEmployeeId(Long EmployeeId);

    List<EmployeeDTO> GetAllEmployees();

    EmployeeDTO UpdateEmployee(Long id,EmployeeDTO updatedemployeeDTO);

    void DeleteEmployee(Long id);
}
