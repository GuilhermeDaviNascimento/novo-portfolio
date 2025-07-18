import Button from '@/components/Button/Button';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-[#f1f1f1] min-w-screen min-h-screen flex flex-col">
      <div className=" flex items-center px-48 justify-between w-full h-full">
        <div className="flex flex-col gap-2">
          <span className="text-2xl">Hi, I'm</span>
          <span className="text-8xl font-bold">Guilherme Davi</span>
          <span className="text-4xl font-bold border-b-8 border-[#e2dcc8] w-max">
            Front-end Developer
          </span>
          <p>
            Creating seamless digital experiences with a focus <br /> on user-centered design and
            clean, efficient code.
          </p>

          <div className="flex gap-5">
            <div>
              <Button>
                View Projects <IoIosArrowForward />
              </Button>
            </div>
            <div>
              <Button variation="secondary">
                Download CV <FaDownload />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-80 h-80">
          <div className="bg-black w-80 h-80 rounded-full border-white border-8"></div>
          <div className="p-3 gap-5 absolute bottom-0 right-0 translate-y-1/2 bg-white rounded-md justify-center items-center flex shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Available for work
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center">
        <IoIosArrowDown className="text-3xl animate-bounce text-[#111827]" />
      </div>
    </div>
  );
}
