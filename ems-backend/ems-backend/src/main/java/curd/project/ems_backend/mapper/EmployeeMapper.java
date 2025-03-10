package curd.project.ems_backend.mapper;

import curd.project.ems_backend.dto.EmployeeDTO;
import curd.project.ems_backend.entity.Employees;

public class EmployeeMapper {
    public static EmployeeDTO maptoEmployeeDTO(Employees employees) {
        return new EmployeeDTO(
                employees.getId(),
                employees.getFirstName(),
                employees.getLastName(),
                employees.getEmail()
        );
    }
    public static Employees maptoEmployee(EmployeeDTO employeeDTO) {
        return new Employees(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail()
        );
    }

}
