import { employeeRepository } from "..";
import { Employee } from "../entity/employee.entity";

export async function createNewEmployee(employee: Employee): Promise<Employee> {
	return employeeRepository.save(employee);
}

export function getEmployeeById(id: string): Promise<Employee | null> {
	return employeeRepository.findOne({
		where: {
			id: id
		}
	});
}

export function getEmployees(): Promise<Employee[]> {
	return employeeRepository.find();
}
