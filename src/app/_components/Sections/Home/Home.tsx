import Button from '@/components/Button';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#f1f1f1] min-w-screen min-h-screen flex flex-col justify-center">
      <div className=" flex items-center lg:px-48 px-10 justify-between w-full h-4/5">
        <div className="flex flex-col gap-2">
          <span className="text-2xl">Hi, It&apos;m</span>
          <span className="md:text-8xl text-4xl font-bold">Guilherme Davi</span>
          <span className="md:text-4xl text-2xl font-bold border-b-8 border-[#e2dcc8] w-max">
            Front-end Developer
          </span>
          <p>
            Creating seamless digital experiences with a focus <br /> on user-centered design and
            clean, efficient code.
          </p>

          <div className="flex gap-5">
            <div>
              <Link href={'#projects'}>
                <Button>
                  View Projects <IoIosArrowForward />
                </Button>
              </Link>
            </div>
            <div>
              <Link href={'/Currículo - Guilherme Davi.pdf'} download>
                <Button variation="secondary">
                  Download CV <FaDownload />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-56 h-56 lg:w-80 lg:h-80 hidden md:flex">
          <div className="bg-black w-56 h-56 lg:w-80 lg:h-80 rounded-full border-white border-8"></div>
          <div className="p-3 gap-5 absolute bottom-0 right-0 translate-y-1/2 bg-white rounded-md justify-center items-center flex shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Available for work
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center">
        <Link href={'#about'}>
          <IoIosArrowDown className="text-3xl animate-bounce text-[#111827]" />
        </Link>
      </div>
    </div>
  );
}
