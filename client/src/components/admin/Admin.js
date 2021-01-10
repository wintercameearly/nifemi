import React, {useState, useEffect, useContext} from 'react';
import ProjectContext from '../../context/project/projectContext';
import AuthContext from "../../context/auth/authContext";
import Swal from "sweetalert2";

const ProjectForm = (props) => {
  const projectContext = useContext(ProjectContext);

  const {
    addProject,
    updateProject,
    deleteProject,
    setCurrent,
    clearCurrent,
    current,
    projects,
    getProjects
  } = projectContext;


  const authContext = useContext(AuthContext);
  /*const {error, clearErrors, isAuthenticated} = authContext;*/

  useEffect(() => {
    if (current !== null) {
      setProject(current)
    } else {
      setProject({
        projectName: '',
        projectType: '',
        projectDescription: '',
      })
    }
  }, [projectContext, current, props.history]);

  useEffect(() => {
    authContext.loadUser().catch(err => console.error(err));

    getProjects();
    // eslint-disable-next-line
  }, []);

  const [project, setProject] = useState({
    projectName: '',
    projectType: '',
    projectDescription: '',
  });

  const {projectName, projectType, projectDescription} = project;

  const onChange = e => {
    setProject({...project, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    e.preventDefault();
    if (projectName === "" || projectType === "" || projectDescription === "") {
      await Swal.fire({
        icon: "info",
        text: "Input all fields"
      })
    } else if (current === null) {
      addProject(project);
      setProject({
        projectName: '',
        projectType: '',
        projectDescription: '',
      });
    } else {
      updateProject(project._id, {projectName, projectType, projectDescription});
      // refresh
      props.history.push('/admin')
    }
    clearAll();
  }

  const onDelete = id => {
    deleteProject(id);
    clearCurrent();
  }

  const clearAll = () => {
    clearCurrent();
  }

  return (
    <div className="container">
      <form action="" onSubmit={onSubmit} className="form-group">
        <h2 className="text-primary">{current ? 'Edit Project' : 'Add Project'}</h2>
        <label htmlFor="projectName" className="form-label"> </label>
        <input type="text" name="projectName" placeholder="project name" value={projectName} onChange={onChange} id="projectName"
               className="form-control"/>
        <label htmlFor="projectType"> </label>
        <input type="text" name="projectType" placeholder="project type e.g java, python" value={projectType} onChange={onChange} id="projectType"
               className="form-control"/>
        <label htmlFor="projectDescription"> </label>
        <input type="text" name="projectDescription" placeholder="project description" value={projectDescription} onChange={onChange}
               id="projectDescription" className="form-control"/>
        <input type="submit" value={current ? 'Update Project' : 'Add Project'}
               className="btn btn-primary btn-block mt-4"/>
        {current &&
        <div className="mt-4">
          <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
        </div>
        }
      </form>

      <div className="mt-7 mb-5">
        <div className="container grid-box">
          {projects !== null ?
            projects.map((project, index) =>
              (
                <div className="card shadow p-3 col" key={index}>
                  <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                  <div className="mt-5">
                    <h5 className="text-description text-capitalize">project description</h5>
                    <p className="text-desc">{project.projectDescription} </p>
                    <div className="d-flex flex-row justify-content-between">
                      <button className="btn btn-warning" onClick={() => setCurrent(project)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => onDelete(project._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              )) : (
              <div>
                <p className="text-center">empty</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectForm
