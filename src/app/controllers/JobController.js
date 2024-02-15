import Job from "../models/Job.js";
import * as Yup from "yup";

class JobController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      company_id: Yup.number().required(),
      notes: Yup.string().required(),
      status: Yup.string(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { title, description, location, company_id, notes, status } =request.body;

    const job = await Job.create({
      title,
      description,
      location,
      company_id,
      notes,
      status: status || "draft",
    });

    return response.status(201).json(job)
  }
}

export default new JobController();
