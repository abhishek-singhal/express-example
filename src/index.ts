import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { Employee } from "./entity/employee.entity";
import { employeeRouter } from "./routers/employee.router";

dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

// Application Port
const PORT: number = Number.parseInt(process.env.PORT);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// load routers
app.use("/v1/employee", employeeRouter);

// app startup
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});


/**
 * Database Configuration
 */
export const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: 3306,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [Employee],
	synchronize: true,
	logging: false,
});


export var employeeRepository: Repository<Employee>;

/**
 * Initialize Database Connection and Repositories
 */
AppDataSource.initialize().then(() => {
	console.log("DB connection established")
	employeeRepository = AppDataSource.getRepository(Employee);
}).catch((error) => {
	console.log(error);
});
