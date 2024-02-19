import { Router } from "express";
import CompanyController from "./app/controllers/CompanyController.js";
import JobController from "./app/controllers/JobController.js";
import path from 'path';
import fs from 'fs'; 

const routes = new Router();

// Variáveis para armazenar o cache e o timestamp da última atualização
let cache = null;
let lastCacheTime = 0;
const cacheDuration = 3600000; // 1 hora em milissegundos

routes.get("/companies", CompanyController.index);
routes.get("/companies/:company_id", CompanyController.show);
routes.post("/job", JobController.store);
routes.put("/job/:job_id/publish", JobController.publish);
routes.put("/job/:job_id", JobController.update);
routes.delete("/job/:job_id", JobController.delete);
routes.put("/job/:job_id/archive", JobController.archive);

routes.get("/feed", (req, res) => {
  const now = Date.now();

  
  if (cache && (now - lastCacheTime < cacheDuration)) {
    return res.json(cache);
  }

  
  const filePath = path.join(process.cwd(), "localS3", "jobFeed.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "Feed de trabalhos não encontrado." });
    }

    
    cache = JSON.parse(data);
    lastCacheTime = now;

    res.setHeader("Content-Type", "application/json");
    res.send(cache);
  });
});

export default routes;
