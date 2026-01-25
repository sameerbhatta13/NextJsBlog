import { Star, Clock, User } from 'lucide-react';

export type ArticleCategory = 'reviews' | 'trailers' | 'boxoffice' | 'upcoming';

interface ArticleCardProps {
    title: string;
    excerpt: string;
    image: string;
    category: ArticleCategory;
    rating?: number;
    releaseDate?: string;
    author: string;
    readTime: string;
    featured?: boolean;
}

const categoryStyles: Record<ArticleCategory, string> = {
    reviews: 'tag-reviews',
    trailers: 'tag-trailers',
    boxoffice: 'tag-boxoffice',
    upcoming: 'tag-upcoming',
};

const categoryLabels: Record<ArticleCategory, string> = {
    reviews: 'Review',
    trailers: 'Trailer',
    boxoffice: 'Box Office',
    upcoming: 'Upcoming',
};

const getRatingStyle = (rating: number) => {
    if (rating >= 7.5) return 'rating-fresh';
    if (rating >= 5) return 'rating-average';
    return 'rating-poor';
};

const ArticleCard = ({
    title,
    excerpt,
    image,
    category,
    rating,
    releaseDate,
    author,
    readTime,
    featured = false,
}: ArticleCardProps) => {
    return (
        <article
            className={`group card-hover rounded-lg md:rounded-xl overflow-hidden bg-card border border-border ${featured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
        >
            {/* Image Container */}
            <div className={`relative overflow-hidden ${featured ? 'aspect-video sm:aspect-[16/9]' : 'aspect-[3/4] sm:aspect-[2/3]'}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Category Tag */}
                <span className={`category-tag ${categoryStyles[category]} absolute top-3 left-3 md:top-4 md:left-4 text-[10px] md:text-xs`}>
                    {categoryLabels[category]}
                </span>

                {/* Rating Badge */}
                {rating && (
                    <div className={`rating-badge ${getRatingStyle(rating)} absolute top-3 right-3 md:top-4 md:right-4`}>
                        <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />
                        <span className="text-[10px] md:text-xs">{rating.toFixed(1)}</span>
                    </div>
                )}

                {/* Play Button for Trailers */}
                {category === 'trailers' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center glow-primary">
                            <svg className="w-4 h-4 md:w-6 md:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-3 md:p-5">
                {releaseDate && (
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">
                        {releaseDate}
                    </p>
                )}

                <h3 className={`font-display ${featured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg md:text-xl'} leading-tight mb-1.5 md:mb-2 group-hover:text-primary transition-colors line-clamp-2`}>
                    {title}
                </h3>

                <p className={`text-muted-foreground ${featured ? 'text-sm md:text-base' : 'text-xs md:text-sm'} line-clamp-2 mb-3 md:mb-4`}>
                    {excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-[10px] md:text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <User className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        <span className="truncate max-w-[80px] md:max-w-none">{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        <span>{readTime}</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;