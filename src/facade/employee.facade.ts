import { CreateEmployee } from "../dto/employee.dto";
import { Employee } from "../entity/employee.entity";
import { createNewEmployee, getEmployees, getEmployeeById } from "../service/employee.service";

/**
 * This method contains the business logic to create a new employee
 * @param request 
 * @returns 
 */
export async function saveNewEmployee(request: CreateEmployee): Promise<Employee> {
	let employee: Employee = new Employee(request.firstName, request.lastName, request.email);
	employee = await createNewEmployee(employee);
	return employee;
}

/**
 * This method contains the business logic to get all employees
 * @returns 
 */
export async function getAllEmployees(): Promise<Employee[]> {
	return await getEmployees();
}

export async function findEmployeeById(id: string): Promise<Employee | null> {
	return await getEmployeeById(id);
}