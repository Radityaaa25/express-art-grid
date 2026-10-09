import { Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight, Asterisk, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
export function Header() {
 const { pathname } = useLocation(); const [open, setOpen] = useState(false); const [active, setActive] = useState('');
 useEffect(() => { setOpen(false); if (pathname !== '/') return; const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-20% 0px -55% 0px' }); document.querySelectorAll('section[id]').forEach(el => observer.observe(el)); return () => observer.disconnect(); }, [pathname]);
 const anchor = (id: string) => pathname === '/' ? `#${id}` : `/#${id}`;
 return <header className="site-header"><Link to="/" className="wordmark" aria-label="Raka beranda">raka<span className="wordmark-dot">.</span><Asterisk size={27}/></Link><nav className={open ? 'main-nav nav-open' : 'main-nav'} aria-label="Navigasi utama"><a href={anchor('about')} className={active === 'about' ? 'nav-active' : ''}>Tentang</a><a href={anchor('services')} className={active === 'services' ? 'nav-active' : ''}>Layanan</a><Link to="/works" className={pathname.startsWith('/works') || active === 'work' ? 'nav-active' : ''}>Karya <span className="nav-count">04</span></Link><a href={anchor('process')}>Proses</a></nav><Button variant="brutal" asChild className="header-contact"><a href={anchor('contact')}>Let’s talk <ArrowUpRight/></a></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></header>;
}
export function Footer() { return <footer className="site-footer"><Link to="/" className="wordmark">raka.</Link><span>© 2026 Raka Pratama. Made with intention.</span><div><a href="mailto:hello@example.com">Email <ArrowUpRight size={14}/></a><Link to="/admin">CMS <ArrowUpRight size={14}/></Link><a href="#top" aria-label="Kembali ke atas">↑</a></div></footer>; }
