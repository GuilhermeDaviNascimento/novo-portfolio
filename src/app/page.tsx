import About from "./_components/Sections/About/About";
import Home from "./_components/Sections/Home/Home";

export default function Main() {
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
      <Home></Home>
      <About></About>
    </div>
  );
}
