import { createContext, useContext, useState, type ReactNode } from 'react';
import { initialProjects, type Project } from '@/lib/portfolio-data';
const Context = createContext<{ projects: Project[]; setProjects: (projects: Project[]) => void } | null>(null);
export function PortfolioProvider({ children }: { children: ReactNode }) { const [projects, setProjects] = useState(initialProjects); return <Context.Provider value={{ projects, setProjects }}>{children}</Context.Provider>; }
export function usePortfolio() { const context = useContext(Context); if (!context) throw new Error('Portfolio provider missing'); return context; }
