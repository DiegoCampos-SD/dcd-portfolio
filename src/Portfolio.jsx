import { About, Contact, Navbar, Projects, Skills } from "./components";

export const Portfolio = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Contact />*/}
    </main>
  );
};
