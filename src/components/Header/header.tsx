import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full my-3 flex items-center justify-between px-4 md:px-12 lg:px-48">
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold text-indigo-600">Guilherme Davi</span>
        <span className="text-xs text-gray-500 tracking-wide">Front-End Developer</span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="#about" className="hover:text-gray-600 transition">
          About
        </Link>
        <Link href="#projects" className="hover:text-gray-600 transition">
          Projects
        </Link>
        <Link href="#skills" className="hover:text-gray-600 transition">
          Skills
        </Link>
        <Link href="#contact" className="hover:text-gray-600 transition">
          Contact
        </Link>
      </nav>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-6 text-sm">
            <Link href="#about" className="hover:text-gray-600 transition">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-600 transition">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-gray-600 transition">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-gray-600 transition">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Button visible on all sizes */}
      <div className="hidden md:block">
        <Link href={'https://wa.me/985649307'}>
          <Button variation="four">Lett&apos;s Talk</Button>
        </Link>
      </div>
    </header>
  );
}
