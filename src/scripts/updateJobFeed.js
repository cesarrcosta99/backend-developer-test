import Job from "../app/models/Job.js";
import '../database/index.js'
import path from 'path';
import fs from 'fs'
import Company from "../app/models/Company.js";

const updateJobFeed = async () => {

    const jobsData = await Job.findAll({
        where: { status: 'published' },
        include: [{ model: Company, as: 'company' }]
    });

    const feedContent = {
        jobs: jobsData.map(job => ({
            id: job.id,
            title: job.title,
            description: job.description,
            company: job.company.name, 
            createdAt: job.createdAt
        })),
        updatedAt: new Date().toISOString()
    };

    const filePath = path.join(process.cwd(), 'localS3', 'jobFeed.json');
    fs.writeFileSync(filePath, JSON.stringify(feedContent, null, 2), 'utf-8');
    console.log('Feed de trabalhos atualizado com sucesso.');
};

updateJobFeed().catch(console.error);
