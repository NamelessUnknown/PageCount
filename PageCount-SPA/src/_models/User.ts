import { Result } from "./Result";
import { Department } from "./Department.enum";

export interface User {
    id: number,
    username:string
    name: string,
    surname: string,
    email: string,
    department: Department,
    registeredSince: Date,
    lastActive: Date,
    results: Result[]
}