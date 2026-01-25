'use client'
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleCard, { ArticleCategory } from '@/constants/ArticleCard';

interface Article {
    id: number;
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

interface CategorySectionProps {
    id: string;
    title: string;
    subtitle?: string;
    articles: Article[];
    showViewAll?: boolean;
}

const CategorySection = ({ id, title, subtitle, articles, showViewAll = true }: CategorySectionProps) => {
    return (
        <section id={id} className="py-10 md:py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 md:mb-8">
                    <div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">{title}</h2>
                        {subtitle && (
                            <p className="text-muted-foreground text-sm md:text-base mt-1 md:mt-2">{subtitle}</p>
                        )}
                    </div>
                    {showViewAll && (
                        <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80 self-start sm:self-auto px-0 sm:px-4">
                            View All
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    )}
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            title={article.title}
                            excerpt={article.excerpt}
                            image={article.image}
                            category={article.category}
                            rating={article.rating}
                            releaseDate={article.releaseDate}
                            author={article.author}
                            readTime={article.readTime}
                            featured={article.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;