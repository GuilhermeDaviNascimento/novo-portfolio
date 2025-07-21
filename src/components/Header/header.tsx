import Button from '../Button/button';

export default function Header() {
  return (
    <header className="w-full my-3 flex items-center justify-between px-4 md:px-12 lg:px-48">
      <div className="font-bold text-lg">PORTIFOLIO</div>
      <nav className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-gray-600 transition">
          About
        </a>
        <a href="#projects" className="hover:text-gray-600 transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-gray-600 transition">
          Skills
        </a>
        <a href="#contact" className="hover:text-gray-600 transition">
          Contact
        </a>
      </nav>
      <div>
        <Button variation="four">Let's Talk</Button>
      </div>
    </header>
  );
}
