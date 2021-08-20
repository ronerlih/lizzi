import {Container, Box} from '@material-ui/core';

import projects from "../../projects.json";
import Project from '../Project';

const Projects = () => {
   console.log(projects)
   return (
     
     <Container>
        <Box m={5} >
          {projects.map(project => <Project project={project} />)}
         </Box>
     </Container>
   );
};
export default Projects;