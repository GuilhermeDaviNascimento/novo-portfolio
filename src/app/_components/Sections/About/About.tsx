export default function About() {
  return (
    <div className="min-w-screen min-h-4/5 flex flex-col">
      <div className=" flex items-center px-48 justify-between w-full h-full gap-5">
        <div className="relative w-[100%] h-[50%]">
          <div className="w-[100%] h-[100%] bg-black rounded-md"></div>
          <div className="p-3 gap-5 absolute bottom-0 right-0 translate-y-1/2 bg-[#0f3d3e] rounded-md justify-center items-center flex shadow-lg">
            <p className="text-white font-bold">1+ Years experience</p>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <span className="border-[#0f3d3e] border-b-4 text-4xl font-bold w-max pb-5">
            About me
          </span>

          <p>
            I'm a passionate Product Designer and Front-End Developer with a keen eye for creating
            beautiful, functional, and user-centered digital experiences. My approach combines
            creative design thinking with technical expertise to build products that not only look
            great but also solve real problems. Specializing in UI/UX design, React development, and
            interactive animations, I help brands and startups transform their ideas into polished
            digital products that users love to engage with.
          </p>
        </div>
      </div>
    </div>
  );
}
