import { createElement, useState } from "react";
import { content } from "../Content";
import Model from 'react-modal';
import {GrFormClose} from 'react-icons/gr';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%',
    borderRadius: '8%',
  },
  overlay: {
    padding: '2rem',
  },
};

Model.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <section id="skills" className="min-h-fit bg-bg_light_primary">
    {/* modal */}
    <Model isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} shouldCloseOnEsc={false} onRequestClose={closeModal} style={customStyles}>
      <div className="flex">
        <div className="flex item-center gap-2 grow">
          <img className="h-10" src={selectSkill?.logo} alt="...." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <div className="flex justify-end">
          <button onClick={closeModal} style={{ fontSize:'30px' }}><GrFormClose/></button>
        </div>
      </div>
      
      <br />
      <ul className="list-disc px-4 font-Poppins sm:text-sm text-xs !leading-5">
        {
          selectSkill?.Indesc.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <br />
      
    </Model>


    {/* content */}
    <div className="md:container px-5 py-14">
      <h2 className="md:text-3x1 text-2x1" data-aos='fade-down'>
        {skills.title}
      </h2>
      <h4 className="text-gray" data-aos='fade-down'>
        {skills.subtitle}
      </h4>
      <br />
      <div className="flex flex-wrap gap-4 justify-center">
        {
          skills.skills_content.map((skill, index) => (
            <div key={index} data-aos='fade-up' data-aos-delay={index * 400} className="bg-white sm:cursor-pointer relative group w-full flex item-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
              <div>
                <img src={skill.logo} alt="..." className="w-10 group-hover:scale-125 duration-200" />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div onClick={()=>{
                  setSelectSkill(skill);
                  openModal();
                  
                }} className="text-x1 absolute top-3 right-3">
                  {
                    createElement(skills.icon)
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>;
};

export default Skills;
