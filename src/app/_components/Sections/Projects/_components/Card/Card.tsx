import Button from '@/components/Button/button';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="w-full flex flex-col">
      <div className="w-full aspect-video overflow-hidden">
        <Image
          src={img}
          alt="card_image"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="bg-white w-full flex flex-col p-4 gap-3">
        <span className="font-semibold text-lg md:text-xl">{title}</span>
        <span className="text-sm text-gray-600 font-light">{description}</span>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#E2DCC8] rounded-full px-3 py-1 text-xs font-semibold text-center"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="w-max">
          <Link href={url}>
            <Button variation="third">
              View Project <IoIosArrowForward />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
