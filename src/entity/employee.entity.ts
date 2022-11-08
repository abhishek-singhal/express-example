import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name: "employees" })
export class Employee {

	@PrimaryColumn({ name: "id", generated: "uuid" })
	id?: string

	@Column({ name: "firstName" })
	firstName: string

	@Column({ name: "lastName" })
	lastName: string

	@Column({ name: "email", unique: true })
	email: string

	public constructor(firstName: string, lastName: string, email: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
}