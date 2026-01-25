'use client'

import { Film, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
    browse: [
        { label: 'Latest Reviews', href: '#' },
        { label: 'New Trailers', href: '#' },
        { label: 'Box Office', href: '#' },
        { label: 'Upcoming Movies', href: '#' },
        { label: 'Top Rated', href: '#' },
    ],
    genres: [
        { label: 'Action', href: '#' },
        { label: 'Comedy', href: '#' },
        { label: 'Drama', href: '#' },
        { label: 'Horror', href: '#' },
        { label: 'Sci-Fi', href: '#' },
    ],
    company: [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Advertise', href: '#' },
        { label: 'Press', href: '#' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
];

const Footer = () => {
    return (
        <footer className="bg-secondary/30 border-t border-border pt-10 md:pt-16 pb-6 md:pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
                        <a href="#" className="flex items-center gap-2 mb-3 md:mb-4">
                            <Film className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            <span className="font-display text-xl md:text-2xl tracking-wider">
                                CINE<span className="text-primary">VERSE</span>
                            </span>
                        </a>
                        <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6 max-w-xs">
                            Your ultimate destination for movie news, reviews, trailers, and all things cinema.
                        </p>
                        <div className="flex gap-2 md:gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Browse */}
                    <div>
                        <h4 className="font-display text-base md:text-lg mb-3 md:mb-4">Browse</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                            {footerLinks.browse.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Genres */}
                    <div>
                        <h4 className="font-display text-base md:text-lg mb-3 md:mb-4">Genres</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                            {footerLinks.genres.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-display text-base md:text-lg mb-3 md:mb-4">Company</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-display text-base md:text-lg mb-3 md:mb-4">Legal</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                    <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
                        © 2026 NepaliCinema. All rights reserved.
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground text-center md:text-right">
                        Made with ❤️ for movie lovers everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;