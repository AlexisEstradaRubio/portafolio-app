import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { InspectProvider } from './context/InspectContext.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <InspectProvider>
                <App />
            </InspectProvider>
        </ThemeProvider>
    </StrictMode>,
);
