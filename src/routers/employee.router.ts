import express, { Request, Response } from "express";
import { findEmployeeById, getAllEmployees, saveNewEmployee } from "../facade/employee.facade";

export const employeeRouter = express.Router();

/**
 * Get Employee by Id
 */
employeeRouter.get("/:id", async (req: Request, res: Response) => {
	const id: string = req.params["id"];
	var employee = await findEmployeeById(id);
	res.status(200).json(employee);
});

/**
 * Get All Employees
 */
employeeRouter.get("/", async (req: Request, res: Response) => {
	var employees = await getAllEmployees();
	res.status(200).json(employees);
});

/**
 * Add Employee
 */
employeeRouter.post("/", async (req: Request, res: Response) => {
	let response = await saveNewEmployee(req.body)
	res.status(201).json(response);
});

/**
 * Update Employee
 */
employeeRouter.put("/:id", async (req: Request, res: Response) => {

});

/**
 * Delete Employee
 */
employeeRouter.delete("/:id", async (req: Request, res: Response) => {

});