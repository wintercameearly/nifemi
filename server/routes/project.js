const router = require('express').Router()
const auth = require('../middleware/auth');
const {Projects, ValidateProject} = require('../models/project');

router.get('/', async (req, res) => {
  try {
    const project = await Projects.find();
    res.status(200).json(project);
  } catch (err) {
    res.json({err})
  }
})

router.get('/:type', async (req, res) => {
  const {type} = req.params;

  try {
    const project = await Projects.findOne({projectType: type});
    res.status(200).json(project);
  } catch (err) {
    res.json({err})
  }
})

router.post('/', [auth], async (req, res) => {
  const {projectType, projectName, projectDescription} = req.body;

  try {
    // validate
    const {error} = ValidateProject(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const project = new Projects({projectType: projectType.toLowerCase(), projectName, projectDescription});
    await project.save();
    res.status(200).json(project);
  } catch (err) {
    res.json({err})
  }

})

router.put('/:id', [auth], async (req, res) => {
  const {id} = req.params;
  const {projectType, projectName, projectDescription} = req.body;

  // validate
  const {error} = ValidateProject(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    let project = await Projects.findByIdAndUpdate(id, {
      projectType: projectType.toLowerCase(),
      projectName,
      projectDescription
    }, {new: true})
    res.status(200).json(project)
  } catch (err) {
    res.json({err})
  }
})

router.delete('/:id', [auth], async (req, res) => {
  let {id} = req.params;

  try {
    await Projects.findByIdAndDelete(id);
    res.status(200).json('deleted')
  } catch (err) {
    res.json({err})
  }
})

module.exports = router;