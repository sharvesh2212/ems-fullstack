package curd.project.ems_backend.service;

import curd.project.ems_backend.dto.EmployeeDTO;
import curd.project.ems_backend.entity.Employees;
import curd.project.ems_backend.exception.ResourceNotFoundException;
import curd.project.ems_backend.mapper.EmployeeMapper;
import curd.project.ems_backend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class createEmployeeimpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    public createEmployeeimpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override

    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employees emp = EmployeeMapper.maptoEmployee(employeeDTO);
        Employees savedEmployee=employeeRepository.save(emp);
        return EmployeeMapper.maptoEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO GetEmployeeId(Long EmployeeId) {
                Employees employee = employeeRepository.findById(EmployeeId).orElseThrow(
                        ()->new ResourceNotFoundException("Employee not found"));
                return EmployeeMapper.maptoEmployeeDTO(employee);
    }

    @Override
public List<EmployeeDTO> GetAllEmployees() {
        List<Employees> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::maptoEmployeeDTO).collect(Collectors.toList());
    }

    public EmployeeDTO UpdateEmployee(Long id,EmployeeDTO employeeDTO) {
            Employees emp= employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found"));
             emp.setFirstName(employeeDTO.getFirstName());
             emp.setLastName(employeeDTO.getLastName());
             emp.setEmail(employeeDTO.getEmail());

             employeeRepository.save(emp);

             return EmployeeMapper.maptoEmployeeDTO(emp);
    }

    @Override
    public void DeleteEmployee(Long id) {
        Employees empdel=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found"));
        employeeRepository.delete(empdel);

    }
}
