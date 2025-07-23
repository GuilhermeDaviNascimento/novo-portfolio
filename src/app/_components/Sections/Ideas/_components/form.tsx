import Button from '@/components/Button/button';

export default function Form() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col">
          <span className="mb-1">Name</span>
          <textarea
            placeholder="Your Name"
            className="border-gray-300 border p-2 hover:outline-none focus:outline-none rounded-md w-full h-12 resize-none text-start align-top"
          />
        </div>

        <div className="flex flex-col">
          <span className="mb-1">Email</span>
          <textarea
            placeholder="Your Email"
            className="border-gray-300 border p-2 hover:outline-none focus:outline-none rounded-md w-full h-12 resize-none text-start align-top"
          />
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <span className="mb-1">Message</span>
        <textarea
          placeholder="Your Message"
          className="border-gray-300 border p-2 hover:outline-none focus:outline-none rounded-md w-full h-32 resize-none text-start align-top"
        />
      </div>

      <Button variation="five">Send Message</Button>
    </div>
  );
}
