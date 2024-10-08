import Image from "next/image";
import MyLanguages from "./components/Languages";
import MyProjects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import "./globals.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-0 px-10 lg:px-44 overscroll-none">
      <AboutMe />
      <MyLanguages />
      <MyProjects />
      <Contact />
      <Footer />
    </main>
  );
}
