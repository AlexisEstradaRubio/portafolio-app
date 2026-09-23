import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

function App() {
    return (
        <div className="min-h-screen bg-bg text-ink font-body">

            <Nav />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}
export default App;
