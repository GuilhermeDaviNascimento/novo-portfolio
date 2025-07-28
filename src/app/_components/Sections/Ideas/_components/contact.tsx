import Button from '@/components/Button/button';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <div className="flex gap-5 flex-col">
        <span className="text-2xl font-bold">Contact Information</span>
        <div className="flex gap-5">
          <div className="w-12 h-12 bg-[#E2DCC8] text-[#0f3d3e] rounded-full flex items-center justify-center text-xl">
            <IoIosMail />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">Email</span>
            <span>guilherme3designer@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-12 h-12 bg-[#E2DCC8] text-[#0f3d3e] rounded-full flex items-center justify-center text-xl">
            <MdLocationOn />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">Location</span>
            <span>Maceió, Alagoas</span>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-col">
        <div>
          <span className="text-2xl font-bold">Follow Me</span>
        </div>
        <div className="flex gap-5">
          <div className="w-12 h-12 bg-[#E2DCC8] text-[#0f3d3e] rounded-full flex items-center justify-center text-xl">
            <FaLinkedin />
          </div>
          <div className="w-12 h-12 bg-[#E2DCC8] text-[#0f3d3e] rounded-full flex items-center justify-center text-xl">
            <FaSquareInstagram />
          </div>
          <div className="w-12 h-12 bg-[#E2DCC8] text-[#0f3d3e] rounded-full flex items-center justify-center text-xl">
            <FaGithubSquare />
          </div>
        </div>
      </div>
      <div className="bg-[#E2DCC8] lg:flex hidden flex-col p-5 gap-5 rounded-2xl ">
        <span>Available for Freelance</span>
        <span>Currently taking on new projects for Q3 2025</span>
        <div className="w-max">
          <Button variation="six">Check Availability</Button>
        </div>
      </div>
    </div>
  );
}
