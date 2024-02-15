import Company from "./../models/Company.js";

class CompanyController {
  async index(request, response) {
    const companies = await Company.findAll();
    return response.status(200).json(companies);
  }

  async show(request, response) {
    try {
      const { company_id } = request.params;
      const company = await Company.findByPk(company_id);

      if (!company) {
        return response.status(404).json({ error: "Company not found" });
      }

      return response.json(company);
    } catch (err) {
      return response.status(500).json({ err: err.message });
    }
  }
}

export default new CompanyController();
