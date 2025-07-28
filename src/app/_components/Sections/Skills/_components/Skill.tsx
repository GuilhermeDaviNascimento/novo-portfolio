import { ReactNode } from 'react';

interface Skill {
  icon: ReactNode;
  name: string;
}

interface SkillSectionProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export default function SkillSection({ title, icon, skills }: SkillSectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <span className="font-bold gap-2 flex items-center">
        {icon} {title}
      </span>
      <div className="grid grid-cols-2 gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="h-16 flex items-center bg-[#f1f1f1] rounded-2xl px-3 gap-3">
            <div className="w-3 md:h-6 h-3 md:w-6 flex items-center justify-center text-xl">
              {skill.icon}
            </div>
            <span className='text-xs md:text-base'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
