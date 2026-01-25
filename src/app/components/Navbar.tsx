'use client'

import { useState } from 'react';
import { Search, Menu, X, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Trailers', href: '#trailers' },
    { label: 'Box Office', href: '#boxoffice' },
    { label: 'Upcoming', href: '#upcoming' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-3 md:px-4">
                <div className="flex items-center justify-between h-14 md:h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-1.5 md:gap-2 group">
                        <Film className="w-6 h-6 md:w-8 md:h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        <span className="font-display text-xl md:text-2xl tracking-wider bg-gradient-to-r from-red-300 to-pink-800 text-transparent bg-clip-text">
                            NEPALI CINEMA</span>

                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="nav-link text-sm font-medium uppercase tracking-wider"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Search & Actions */}
                    <div className="flex items-center gap-4">
                        <div className={`relative transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
                            <Input
                                placeholder="Search movies..."
                                className="bg-secondary border-none pr-10"
                            />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="hover:bg-secondary"
                        >
                            <Search className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-secondary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;