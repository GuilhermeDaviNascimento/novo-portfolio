import Button from '@/components/Button/button';
import { IoIosArrowForward } from 'react-icons/io';

interface Card_Props {
  img: string;
  title: string;
  description: string;
  technologies: [string, string, string];
  url: string;
}

export default function Card({ img, title, description, technologies, url }: Card_Props) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-3/2 overflow-hidden">
        <img
          src={img}
          alt="card_image"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="bg-white w-full h-1/2 flex flex-col p-5 gap-3">
        <span className="font-semibold text-xl">{title}</span>
        <span className="text-sm text-gray-600 font-light">{description}</span>
        <span className="flex gap-3">
          {technologies.slice(0, 3).map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#E2DCC8] rounded-full p-1 min-w-16 font-semibold flex justify-center items-center"
            >
              {tech}
            </div>
          ))}
        </span>
          <Button variation="third">
            View Project <IoIosArrowForward />
          </Button>
      </div>
    </div>
  );
}
