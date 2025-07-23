import Contact from './_components/contact';
import Form from './_components/form';

export default function Idea() {
  return (
    <div
      className="min-w-screen bg-[#f1f1f1] min-h-4/5 flex flex-col justify-center items-center h-full px-48"
      id="skills"
    >
      <span className="border-[#0f3d3e] border-b-4 text-4xl font-bold w-max pb-5">
        Have an Idea? Let's Talk
      </span>
      <span className="mt-5">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of
        your vision.
      </span>
      <div className="flex mt-5 gap-5 h-1/2 w-full">
        <Form></Form>
        <Contact></Contact>
      </div>
    </div>
  );
}
