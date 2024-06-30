import styles from './ProjectsStyles.module.css';
import projectImg  from '../../assets/project-1.png';
import prepWiseAi from '../../assets/PrepWiseAI.png';
import express from '../../assets/project-3.png';
import Tic from '../../assets/project-2.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={projectImg}
          link="https://collabcanvas-alpha.vercel.app/"
          h3="CollabCanvas"
          p="Real-Time Web App"
        />
        <ProjectCard
          src={prepWiseAi}
          link="https://prepwiseai.vercel.app/"
          h3="PrepWiseAI"
          p="AI Interview Coach"
        />
        <ProjectCard
          src={express}
          link="https://github.com/Kmrshubham335/Complete-WebDevelopment-Resource/tree/main/Backend/NodeJs/ExpressJs/Project/Login_Auth"
          h3="ExpressJS Authentication"
          p="Login Authentication"
        />
        <ProjectCard
          src={Tic}
          link="https://github.com/Kmrshubham335/Complete-WebDevelopment-Resource/tree/main/JavaScript/Project_JS/Day2_Tic%20Tac%20Toe"
          h3="Tic Tac Toe"
          p="JavaScript Game"
        />
      </div>
    </section>
  );
}

export default Projects;
