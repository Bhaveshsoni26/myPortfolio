import { content } from '../Content';

const Projects = () => {
  const { Projects } = content;
  return (<section className='bg-bg_light_primary'>
    <div className='md:container px-5 py-14 min-h-screen'>
      <div>
        <h2 className='md:text-3x1 text-2x1'>{Projects.title}</h2>
        <h4 className='text-gray'>{Projects.subtitle}</h4>
      </div>
      </div>
  </section>
  );
};

export default Projects;
