import Card from './_components/Card/Card';

export default function Projects() {
  return (
    <div className="bg-[#f1f1f1] min-w-screen min-h-4/5 flex flex-col justify-center items-center">
      <span className="border-[#0f3d3e] border-b-4 text-4xl font-bold w-max pb-5">
        Featured Projects
      </span>
      <span className="mt-5">
        A selection of my recent work that showcases my skills and expertise in design and
        development.
      </span>
      <div className="flex items-center px-48 justify-between w-full gap-10 h-2/3 mt-10">
        <Card
          img="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc8b9486b0-1ed1bcb5ceb3b36c7b87.png"
          title="FinTrack Mobile App"
          description="A finance tracking application with intuitive UI and seamless user experience."
          technologies={['UI/UX', 'React Native', 'Figma']}
          url="youtube.com"
        ></Card>

        <Card
          img="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc8b9486b0-1ed1bcb5ceb3b36c7b87.png"
          title="FinTrack Mobile App"
          description="A finance tracking application with intuitive UI and seamless user experience."
          technologies={['UI/UX', 'React Native', 'Figma']}
          url="youtube.com"
        ></Card>

        <Card
          img="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc8b9486b0-1ed1bcb5ceb3b36c7b87.png"
          title="FinTrack Mobile App"
          description="A finance tracking application with intuitive UI and seamless user experience."
          technologies={['UI/UX', 'React Native', 'Figma']}
          url="youtube.com"
        ></Card>
      </div>
    </div>
  );
}
