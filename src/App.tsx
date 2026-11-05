import { Nav } from "./components/Nav";
import { InspectBanner } from "./components/InspectBanner";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { CaseStudies } from "./sections/CaseStudies";
import { Skills } from "./sections/Skills";
import { PortfolioNote } from "./sections/PortfolioNote";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
    return (
        <>
            <Nav />
            <main id="contenido">
                <Hero />
                <About />
                <Experience />
                <CaseStudies />
                <Skills />
                <PortfolioNote />
                <Contact />
            </main>
            <Footer />
            <InspectBanner />
        </>
    );
}

export default App;
