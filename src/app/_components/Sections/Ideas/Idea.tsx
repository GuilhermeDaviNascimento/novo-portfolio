import Contact from './_components/contact';
import Form from './_components/form';

export default function Idea() {
  return (
    <div
      className="min-w-screen lg:min-h-4/5 min-h-max lg:my-0 my-10 px-2 flex flex-col items-center lg:px-10"
      id="contact"
    >
      <span className="border-[#0f3d3e] border-b-4 text-4xl font-bold lg:w-max pb-5">
        Have an Idea? Lett&apos;s Talk
      </span>
      <span className="mt-5">
        It&apos;m always open to discussing new projects, creative ideas or opportunities to be part of
        your vision.
      </span>
      <div className="flex mt-5 gap-5 h-1/2 w-full flex-col lg:flex-row">
        <Form></Form>
        <Contact></Contact>
      </div>
    </div>
  );
}
