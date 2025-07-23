import Skill from './_components/Skill';
import { RiNextjsFill, RiTailwindCssFill, RiCodeView } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

import { FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { IoMdPhonePortrait } from 'react-icons/io';
import { LuConstruction } from 'react-icons/lu';

import { SiMysql } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

import { VscVscode } from 'react-icons/vsc';
import { FaGithub } from 'react-icons/fa';
import { SiSequelize } from 'react-icons/si';
import { SiEslint } from 'react-icons/si';

import { FaPenFancy } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';

const frontendSkills = [
  { icon: <RiNextjsFill />, name: 'Next.js' },
  { icon: <FaReact />, name: 'React' },
  { icon: <IoLogoJavascript />, name: 'Javascript' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind' },
];

const designSkills = [
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <SiAdobephotoshop />, name: 'Adobe Photoshop' },
  { icon: <IoMdPhonePortrait />, name: 'Design Responsivo' },
  { icon: <LuConstruction />, name: 'Prototipação de Interfaces' },
];

const backendSkills = [
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <DiMongodb />, name: 'MongoDB' },
];

const developerSkills = [
  { icon: <VscVscode />, name: 'VS Code' },
  { icon: <FaGithub />, name: 'Git/GitHub' },
  { icon: <SiSequelize />, name: 'Sequelize' },
  { icon: <SiEslint />, name: 'ESLint' },
];

export default function Skills() {
  return (
    <div className="min-w-screen lg:min-h-4/5 min-h-max lg:my-0 my-10 px-10 flex flex-col justify-center items-center" id='skills'>
      <span className="border-[#0f3d3e] border-b-4 text-4xl font-bold w-max pb-5">My Skills</span>
      <span className="mt-5">The tools and technologies I use to bring ideas to life.</span>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mt-5">
        <Skill title="Frontend" icon={<RiCodeView />} skills={frontendSkills} />
        <Skill title="Design" icon={<FaPenFancy />} skills={designSkills} />
        <Skill title="Backend" icon={<FaNodeJs />} skills={backendSkills} />
        <Skill title="Developer" icon={<FaTools />} skills={developerSkills} />
      </div>
    </div>
  );
}
