import { Router } from "express";
import CompanyController from "./app/controllers/CompanyController.js";
import JobController from "./app/controllers/JobController.js";

const routes = new Router();

routes.get("/companies", CompanyController.index);
routes.get("/companies/:company_id", CompanyController.show);
routes.post("/job", JobController.store);
routes.put("/job/:job_id/publish", JobController.publish);
routes.put("/job/:job_id", JobController.update);
routes.delete("/job/:job_id", JobController.delete);

export default routes;
