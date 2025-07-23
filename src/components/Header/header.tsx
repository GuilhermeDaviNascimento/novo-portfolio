import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Button from '../Button/button';

export default function Header() {
  return (
    <header className="w-full my-3 flex items-center justify-between px-4 md:px-12 lg:px-48">
      <div className="font-bold text-lg">PORTIFOLIO</div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm">
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

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-6 text-sm">
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
          </div>
        </SheetContent>
      </Sheet>

      {/* Button visible on all sizes */}
      <div className="hidden md:block">
        <Button variation="four">Let's Talk</Button>
      </div>
    </header>
  );
}
