import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/portfolio-data';
export function ProjectCard({ project }: { project: Project }) { return <Link to="/works/$slug" params={{ slug: project.slug }} className="project-card"><div className="project-image"><img src={project.image} width={1024} height={768} loading="lazy" alt={project.title}/><span className="project-view">Lihat proyek <ArrowUpRight size={18}/></span><span className="project-year">{project.year}</span></div><div className="project-info"><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div><span className="project-arrow"><ArrowUpRight/></span></div></Link>; }
