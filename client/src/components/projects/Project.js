import React, {useEffect, useContext, Fragment} from 'react';
import Line from '../img/line.svg';
import {NavLink} from "react-router-dom";
import ProjectContext from "../../context/project/projectContext";
import AuthContext from "../../context/auth/authContext"
import ScrollRestoration from "../../scrollrestore/ScrollRestoration";

const Project = () => {

  const projectContext = useContext(ProjectContext);

  const {projects, getProjects} = projectContext;

  const authContext = useContext(AuthContext)

  const {isAuthenticated} = authContext

  useEffect(() => {
    getProjects();

    // eslint-disable-next-line
  }, [])


  return (
    <div className="container">
      <ScrollRestoration/>
      <p className="text-capitalize text-left text-works mb-5 mt-4">my works</p>
      {projects !== null ?
        projects.map((project, index) => project.projectType === 'python' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-5">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">python projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )) : `empty`
      }


      {projects.map((project, index) => project.projectType === 'javascript' &&
        (
          <Fragment key={index}>
            <div className="d-flex justify-content-between mt-7">
              <img src={Line} alt="line"/>
              <h3 className="text-uppercase text-center font-weight-bold">javascript projects</h3>
              <img src={Line} alt="line"/>
            </div>
            <div className="mt-5 mb-5">
              <div className="container grid-box">
                <div className="card shadow p-3 col" key={index}>
                  <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                  <div className="mt-5">
                    <h5 className="text-description text-capitalize">project description</h5>
                    <p className="text-desc">{project.projectDescription} </p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))
      }

      {
        projects.map((project, index) => project.projectType === 'php' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">php projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      {
        projects.map((project, index) => project.projectType === 'django' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">django projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      {
        projects.map((project, index) => project.projectType === 'flask' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">flask projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      {
        projects.map((project, index) => project.projectType === 'aws' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">aws projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      {
        projects.map((project, index) => project.projectType === 'gcp' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7" key={index}>
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">gcp projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      {
        projects.map((project, index) => project.projectType === 'css' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">css projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      {
        projects.map((project, index) => project.projectType === 'html' &&
          (
            <Fragment key={index}>
              <div className="d-flex justify-content-between mt-7">
                <img src={Line} alt="line"/>
                <h3 className="text-uppercase text-center font-weight-bold">html projects</h3>
                <img src={Line} alt="line"/>
              </div>
              <div className="mt-5 mb-5">
                <div className="container grid-box">
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
      }

      <div className="text-center mb-3 mt-7">
        {isAuthenticated && (<NavLink exact to='/admin' className="btn btn-warning text-uppercase">Admin</NavLink>)}
      </div>
    </div>
  );
};

export default Project;
