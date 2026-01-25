
import CategorySection from '../components/CategorySection';
import Newsletter from '../../Newsletter';

const reviewsArticles = [
    {
        id: 1,
        title: 'Midnight in Paris 2: A Masterpiece of Nostalgia',
        excerpt: 'Woody Allen returns with a sequel that surpasses the original, blending romance and time travel in ways never seen before.',
        image: '/movie-poster-1.png',
        category: 'reviews' as const,
        rating: 9.1,
        author: 'Sarah Mitchell',
        readTime: '8 min read',
        featured: true,
    },
    {
        id: 2,
        title: 'The Haunting of Blackwood Manor Review',
        excerpt: 'A spine-chilling gothic horror that will keep you awake for nights.',
        image: '/movie-poster-2.png',
        category: 'reviews' as const,
        rating: 7.8,
        author: 'James Cooper',
        readTime: '5 min read',
    },
    {
        id: 3,
        title: 'Love in Tokyo: Heartwarming Romance',
        excerpt: 'A beautiful love story set against the backdrop of modern Japan.',
        image: '/movie-poster-3.png',
        category: 'reviews' as const,
        rating: 8.2,
        author: 'Emily Chen',
        readTime: '6 min read',
    },
    {
        id: 4,
        title: 'Speed Demon 3 Exceeds Expectations',
        excerpt: 'The third installment brings more action, better stunts, and deeper character development.',
        image: '/movie-poster-4.png',
        category: 'reviews' as const,
        rating: 8.5,
        author: 'Mike Torres',
        readTime: '7 min read',
    },
];

const trailersArticles = [
    {
        id: 5,
        title: 'Galaxy Warriors: First Look Trailer Breakdown',
        excerpt: 'We analyze every frame of the epic space opera trailer that broke the internet.',
        image: '/movie-poster-5.png',
        category: 'trailers' as const,
        releaseDate: 'Coming June 2026',
        author: 'Alex Johnson',
        readTime: '4 min read',
    },
    {
        id: 6,
        title: 'Enchanted Forest Official Trailer Released',
        excerpt: 'Pixar announces their most ambitious project yet with stunning visuals.',
        image: '/movie-poster-6.png',
        category: 'trailers' as const,
        releaseDate: 'Coming July 2026',
        author: 'Lisa Park',
        readTime: '3 min read',
    },
    {
        id: 7,
        title: 'Neon Horizon Teaser Drops Hints',
        excerpt: 'The sci-fi epic reveals its cyberpunk world in a stunning 2-minute teaser.',
        image: '/movie-poster-1.png',
        category: 'trailers' as const,
        releaseDate: 'Coming February 2026',
        author: 'David Kim',
        readTime: '5 min read',
    },
    {
        id: 8,
        title: 'The Haunting Returns: Sequel Trailer',
        excerpt: 'The horror franchise continues with an even scarier chapter.',
        image: '/movie-poster-2.png',
        category: 'trailers' as const,
        releaseDate: 'Coming October 2026',
        author: 'Rachel Green',
        readTime: '4 min read',
    },
];

const boxOfficeArticles = [
    {
        id: 9,
        title: 'Weekend Box Office: Speed Demon 3 Dominates',
        excerpt: 'The action sequel races to $150M opening weekend, crushing competition.',
        image: '/movie-poster-4.png',
        category: 'boxoffice' as const,
        author: 'Financial Desk',
        readTime: '3 min read',
        featured: true,
    },
    {
        id: 10,
        title: 'International Markets Push Galaxy Warriors Past $1B',
        excerpt: 'The space epic becomes the first film of 2026 to hit the billion mark.',
        image: '/movie-poster-5.png',
        category: 'boxoffice' as const,
        author: 'Global Team',
        readTime: '4 min read',
    },
    {
        id: 11,
        title: 'Horror Films See Surge in Theater Attendance',
        excerpt: 'Studios invest in the genre as audiences return for scares.',
        image: '/movie-poster-2.png',
        category: 'boxoffice' as const,
        author: 'Industry Report',
        readTime: '6 min read',
    },
];

const upcomingArticles = [
    {
        id: 12,
        title: 'Christopher Nolan Announces Next Project',
        excerpt: 'The acclaimed director reveals plans for a historical epic spanning three centuries.',
        image: '/movie-poster-1.png',
        category: 'upcoming' as const,
        releaseDate: 'Expected 2027',
        author: 'Hollywood Bureau',
        readTime: '5 min read',
    },
    {
        id: 13,
        title: 'Marvel Phase 7 Lineup Revealed',
        excerpt: 'Disney announces the next wave of superhero films with surprising new heroes.',
        image: '/movie-poster-4.png',
        category: 'upcoming' as const,
        releaseDate: '2026-2028',
        author: 'Entertainment Desk',
        readTime: '8 min read',
    },
    {
        id: 14,
        title: 'A24 Slate: 10 Films to Watch',
        excerpt: 'The indie studio continues its streak with an impressive upcoming lineup.',
        image: '/movie-poster-3.png',
        category: 'upcoming' as const,
        releaseDate: 'Throughout 2026',
        author: 'Indie Focus',
        readTime: '7 min read',
    },
    {
        id: 15,
        title: 'Animated Features Coming This Summer',
        excerpt: 'From Pixar to Studio Ghibli, the best animated films on the horizon.',
        image: '/movie-poster-6.png',
        category: 'upcoming' as const,
        releaseDate: 'Summer 2026',
        author: 'Animation Team',
        readTime: '6 min read',
    },
];

const CategoryMainPage = () => {
    return (
        <div className="min-h-screen bg-background">


            <CategorySection
                id="reviews"
                title="Latest Reviews"
                subtitle="In-depth analysis of the newest releases"
                articles={reviewsArticles}
            />

            <CategorySection
                id="trailers"
                title="New Trailers"
                subtitle="First looks and exclusive previews"
                articles={trailersArticles}
            />

            <Newsletter />

            <CategorySection
                id="boxoffice"
                title="Box Office"
                subtitle="Numbers and industry insights"
                articles={boxOfficeArticles}
            />

            <CategorySection
                id="upcoming"
                title="Upcoming Movies"
                subtitle="What's next in cinema"
                articles={upcomingArticles}
            />

        </div>
    );
};

export default CategoryMainPage;