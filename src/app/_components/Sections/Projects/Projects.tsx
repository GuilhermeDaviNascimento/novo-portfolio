import Card from './_components/Card/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Projects() {
  return (
    <div
      className="bg-[#f1f1f1] w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-center"
      id="projects"
    >
      <span className="border-[#0f3d3e] border-b-4 text-3xl md:text-4xl font-bold w-max pb-4">
        Featured Projects
      </span>
      <span className="mt-4 text-center max-w-2xl text-sm md:text-base">
        A selection of my recent work that showcases my skills and expertise in design and
        development.
      </span>

      <Carousel className="w-full mt-10">
        <CarouselContent>
          <CarouselItem className="px-2 md:basis-1/2 lg:basis-1/3">
            <Card
              img="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc8b9486b0-1ed1bcb5ceb3b36c7b87.png"
              title="FinTrack Mobile App"
              description="A finance tracking application with intuitive UI and seamless user experience."
              technologies={['UI/UX', 'React Native', 'Figma']}
              url="https://youtube.com"
            />
          </CarouselItem>
          <CarouselItem className="px-2 md:basis-1/2 lg:basis-1/3">
            <Card
              img="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc8b9486b0-1ed1bcb5ceb3b36c7b87.png"
              title="FinTrack Mobile App"
              description="A finance tracking application with intuitive UI and seamless user experience."
              technologies={['UI/UX', 'React Native', 'Figma']}
              url="https://youtube.com"
            />
          </CarouselItem>
          <CarouselItem className="px-2 md:basis-1/2 lg:basis-1/3">
            <Card
              img="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc8b9486b0-1ed1bcb5ceb3b36c7b87.png"
              title="FinTrack Mobile App"
              description="A finance tracking application with intuitive UI and seamless user experience."
              technologies={['UI/UX', 'React Native', 'Figma']}
              url="https://youtube.com"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
