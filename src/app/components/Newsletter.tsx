'use client'

import { Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            <div className="absolute inset-0 bg-secondary/30" />

            <div className="container mx-auto px-4 relative">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                        <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">Stay Updated</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
                        Never Miss a<br />
                        <span className="text-gradient-primary">Movie Update</span>
                    </h2>

                    <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 px-4 md:px-0">
                        Get the latest movie news, reviews, and exclusive content delivered straight to your inbox.
                        Join over 50,000 film enthusiasts.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-2 md:px-0">
                        <div className="relative flex-1">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pl-9 md:pl-10 h-11 md:h-12 bg-card border-border text-sm md:text-base"
                            />
                        </div>
                        <Button type="submit" size="lg" className="h-11 md:h-12 px-6 md:px-8 glow-primary">
                            Subscribe
                        </Button>
                    </form>

                    <p className="text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4">
                        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;