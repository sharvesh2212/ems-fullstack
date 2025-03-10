package curd.project.ems_backend.repository;

import curd.project.ems_backend.entity.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees,Long> {
}
