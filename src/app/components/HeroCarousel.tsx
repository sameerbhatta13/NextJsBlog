'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import Image from 'next/image'
import { Button } from '@/components/ui/button';

interface HeroSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    rating: number;
    releaseDate: string;
    category: string;
    image: string;
}

const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: 'NEON HORIZON',
        subtitle: 'The Future Awaits',
        description: 'In a world where technology and humanity collide, one warrior stands between order and chaos. A breathtaking sci-fi epic that redefines the genre.',
        rating: 9.2,
        releaseDate: 'February 2026',
        category: 'Sci-Fi Action',
        image: '/hero-image-1.png',
    },
    {
        id: 2,
        title: 'RISING PHOENIX',
        subtitle: 'Heroes Never Die',
        description: 'When darkness threatens to consume everything, an unlikely hero emerges from the flames. The most explosive superhero film of the decade.',
        rating: 8.8,
        releaseDate: 'March 2026',
        category: 'Action Adventure',
        image: '/hero-image-2.png',
    },
    {
        id: 3,
        title: 'THE ANCIENT ORDER',
        subtitle: 'Secrets of the Temple',
        description: 'A legendary archaeologist uncovers a secret that could change history forever. An epic adventure that combines mystery, magic, and mythology.',
        rating: 8.5,
        releaseDate: 'April 2026',
        category: 'Fantasy Adventure',
        image: '/hero-image-3.png',
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const slide = heroSlides[currentSlide];

    return (
        <>
            <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
                {/* Background Images */}
                {heroSlides.map((s, index) => (
                    <div
                        key={s.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={s.image}
                            fill={true}
                            alt={s.title}
                            className="object-cover"
                        />
                        <div className="hero-gradient absolute inset-0" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent md:via-background/50" />
                    </div>
                ))}

                {/* Content */}
                <div className="absolute inset-0 flex items-end pb-24 sm:pb-16 md:items-center md:pb-0">
                    <div className="container mx-auto px-4 pt-16">
                        <div className="max-w-2xl">
                            {/* Category Tag */}
                            <div
                                key={`cat-${currentSlide}`}
                                className="animate-fade-up inline-block"
                            >
                                <span className="category-tag tag-upcoming mb-3 md:mb-4 text-xs md:text-sm">
                                    {slide.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1
                                key={`title-${currentSlide}`}
                                className="animate-fade-up font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none mb-1 md:mb-2"
                                style={{ animationDelay: '0.1s' }}
                            >
                                {slide.title}
                            </h1>

                            {/* Subtitle */}
                            <p
                                key={`sub-${currentSlide}`}
                                className="animate-fade-up text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-display tracking-wide mb-3 md:mb-4"
                                style={{ animationDelay: '0.2s' }}
                            >
                                {slide.subtitle}
                            </p>

                            {/* Rating & Release */}
                            <div
                                key={`meta-${currentSlide}`}
                                className="animate-fade-up flex items-center gap-4 md:gap-6 mb-4 md:mb-6"
                                style={{ animationDelay: '0.3s' }}
                            >
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <Star className="w-4 h-4 md:w-5 md:h-5 text-accent fill-sidebar text-red-600" />
                                    <span className="font-semibold text-base md:text-lg">{slide.rating}</span>
                                </div>
                                <span className="text-muted-foreground text-sm md:text-base">{slide.releaseDate}</span>
                            </div>

                            {/* Description */}
                            <p
                                key={`desc-${currentSlide}`}
                                className="animate-fade-up text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg line-clamp-3 md:line-clamp-none"
                                style={{ animationDelay: '0.4s' }}
                            >
                                {slide.description}
                            </p>

                            {/* Buttons */}
                            <div
                                key={`btns-${currentSlide}`}
                                className="animate-fade-up flex flex-col sm:flex-row gap-3 md:gap-4"
                                style={{ animationDelay: '0.5s' }}
                            >
                                <Button size="lg" className="gap-2 glow-primary w-full sm:w-auto">
                                    <Play className="w-4 h-4 md:w-5 md:h-5" />
                                    Watch Trailer
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Read Review
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows - Hidden on small mobile */}
                <div className="hidden sm:flex absolute bottom-1/2 translate-y-1/2 left-2 right-2 md:left-4 md:right-4 justify-between pointer-events-none">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevSlide}
                        className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 border border-border/50"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextSlide}
                        className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 border border-border/50"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1.5 md:h-1 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'w-8 md:w-12 bg-primary'
                                : 'w-3 md:w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                }`}
                        />
                    ))}
                </div>
            </section>
        </>

    );
};

export default HeroCarousel;