const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectType: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  }, projectDescription: {
    type: String,
    required: true,
  }
})

const validateProjects = (project) => {
  const schema = Joi.object({
    projectType: Joi.string().required(),
    projectName: Joi.string().required(),
    projectDescription: Joi.string().required(),
  });

  return schema.validate(project)
}

const Projects = mongoose.model('Projects', projectSchema);

exports.ValidateProject = validateProjects;
exports.Projects = Projects;