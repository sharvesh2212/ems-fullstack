package curd.project.ems_backend.controller;

import curd.project.ems_backend.dto.EmployeeDTO;
import curd.project.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("api/Employees")
public class EmployeeController {

    @Autowired
private EmployeeService employeeService;

    @PostMapping
public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO) {
    EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDTO);
     return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
}

@GetMapping("{id}")

public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable("id")Long id) {
                EmployeeDTO employeeDTO=employeeService.GetEmployeeId(id);
                 return ResponseEntity.ok(employeeDTO);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees() {
        List<EmployeeDTO> employeeDTOList=employeeService.GetAllEmployees();
        return ResponseEntity.ok(employeeDTOList);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> UpdateEmployee(@PathVariable("id") Long id ,@RequestBody EmployeeDTO employeeDTO) {
        EmployeeDTO updatedEmployee=employeeService.UpdateEmployee(id,employeeDTO);
        return ResponseEntity.ok(updatedEmployee);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> DeleteEmployee(@PathVariable("id") Long id) {
        employeeService.DeleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }
}
