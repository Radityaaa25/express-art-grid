import matcha from '@/assets/matcha-project.jpg';
import architecture from '@/assets/photo-project.jpg';
import collage from '@/assets/hero-collage.jpg';
export const categories = ['Semua', 'Desain Grafis', 'Fotografi', 'Video', 'Editing'];
export type Project = { id: number; title: string; slug: string; category: string; year: string; image: string; summary: string; status: 'published' | 'draft'; featured: boolean };
export const initialProjects: Project[] = [
 { id: 1, title: 'Matcha Club', slug: 'matcha-club', category: 'Desain Grafis', year: '2026', image: matcha, summary: 'Identitas yang segar untuk ritual sehari-hari. Dari strategi visual hingga kemasan yang punya karakter.', status: 'published', featured: true },
 { id: 2, title: 'Ruang & Rasa', slug: 'ruang-dan-rasa', category: 'Fotografi', year: '2026', image: architecture, summary: 'Menangkap percakapan antara ruang, cahaya, dan manusia. Sebuah eksplorasi arsitektur tropis melalui lensa.', status: 'published', featured: true },
 { id: 3, title: 'Beyond the Frame', slug: 'beyond-the-frame', category: 'Video', year: '2025', image: collage, summary: 'Cerita tentang orang-orang yang berani melihat dunia dari sudut berbeda. Konsep visual untuk film pendek kreatif.', status: 'published', featured: true },
 { id: 4, title: 'A Different Perspective', slug: 'different-perspective', category: 'Editing', year: '2025', image: architecture, summary: 'Eksperimen warna, ritme, dan komposisi untuk memberikan perspektif baru pada cerita yang familiar.', status: 'published', featured: false },
];
