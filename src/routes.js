import { Router } from "express"
import CompanyController from "./app/controllers/CompanyController.js"

const routes=new Router()

routes.get("/companies",CompanyController.index)
routes.get('/companies/:company_id',CompanyController.show)

export default routes