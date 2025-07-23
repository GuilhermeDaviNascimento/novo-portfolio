import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import About from './_components/Sections/About/About';
import Home from './_components/Sections/Home/Home';
import Projects from './_components/Sections/Projects/Projects';
import Skills from './_components/Sections/Skills/Skills';
import Idea from './_components/Sections/Ideas/Idea';


export default function Main() {
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Idea></Idea>
      <Footer></Footer>
    </div>
  );
}
