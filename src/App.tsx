import { ThemeToggle } from "./components/ThemeToggle";
import { ComponentCard } from "./components/ComponentCard";
import { experience } from "./data/experience";

function App() {
  return (
    <main className="min-h-screen bg-bg text-ink p-8 max-w-2xl mx-auto">
      <div className="flex justify-end mb-6">
        <ThemeToggle />
      </div>
      {experience.map((exp) => (
        <ComponentCard key={exp.id} experience={exp} />
      ))}
    </main>
  );
}

export default App;