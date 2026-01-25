'use client'
import { TrendingUp, Flame } from 'lucide-react';

const trendingTopics = [
    'Oscars 2026 Predictions',
    'New Marvel Announcement',
    'Dune 3 Confirmed',
    'Box Office Records',
    'Streaming Wars Update',
    'Christopher Nolan Interview',
];

const TrendingBar = () => {
    return (
        <div className="bg-secondary/50 border-y border-border py-2.5 md:py-3 overflow-hidden">
            <div className="container mx-auto px-3 md:px-4">
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Label */}
                    <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                        <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Trending</span>
                    </div>

                    {/* Scrolling Topics */}
                    <div className="overflow-hidden relative flex-1">
                        <div className="flex items-center gap-4 md:gap-6 animate-marquee">
                            {[...trendingTopics, ...trendingTopics].map((topic, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                                >
                                    <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                                    {topic}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingBar;