import { ThemeToggle } from "./components/ThemeToggle";
import { Skeleton } from "./components/Skeleton";

function App() {
    return (
        <main className="min-h-screen bg-bg text-ink p-8 flex flex-col gap-4 max-w-md">
            <ThemeToggle />
            <Skeleton variant="circle" width="48px" height="48px" />
            <Skeleton variant="text" height="1.5rem" width="60%" />
        </main>
    );
}

export default App;
