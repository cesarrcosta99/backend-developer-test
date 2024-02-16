import Job from "../models/Job.js";
import * as Yup from "yup";

class JobController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      company_id: Yup.string().required(),
      notes: Yup.string().required(),
      status: Yup.string(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { title, description, location, company_id, notes, status } =
      request.body;

    const job = await Job.create({
      title,
      description,
      location,
      company_id,
      notes,
      status: status || "draft",
    });

    return response.status(201).json(job);
  }

  async publish(request, response) {
    const { job_id } = request.params;
    try {
      const job = await Job.findByPk(job_id);
      if (!job) {
        return response.status(404).json({ error: "Job not found" });
      }

      await job.update({ status: "published" });

      return response.json(job);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      location: Yup.string(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { job_id } = request.params;
    const { title, description, location } = request.body;

    try {
      const job = await Job.findByPk(job_id);

      if (!job) {
        return response.status(404).json({ error: "Job not found" });
      }

      await job.update({ title, description, location });

      return response.json(job);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async delete(request, response) {
    const { job_id } = request.params;

    try {
      const job = await Job.findByPk(job_id);

      if (!job) {
        return response.status(404).json({ error: "Job not found" });
      }

      await job.destroy();

      return response.status(204).send();
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async archive(request, response) {
    const { job_id } = request.params;
    try {
      const job = await Job.findByPk(job_id);
      if (!job) {
        return response.status(404).json({ error: "Job not found" });
      }

      if (job.status === "archived") {
        return response.status(400).json({ error: "Job is already archived" });
      }

      await job.update({ status: "archived" });

      return response.json({ message: "Job has been archived successfully" });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}

export default new JobController();
