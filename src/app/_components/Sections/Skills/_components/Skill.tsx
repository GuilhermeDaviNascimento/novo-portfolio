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
          <div
            key={index}
            className="w-2xs h-16 flex items-center bg-[#f1f1f1] rounded-2xl px-3 gap-2"
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
