import { Star } from "lucide-react";

export default function ReviewsSection() {
    const reviews = [
        {
            name: "Sarah M.",
            service: "Dental Implants",
            rating: 5,
            review: "Very impressed! The doctor was kind and explained everything in detail. No pain at all. Got 2 implants done and they work perfectly, just like real teeth!",
        },
        {
            name: "John D.",
            service: "Teeth Whitening",
            rating: 5,
            review: "My teeth are so much whiter now! No sensitivity at all. Staff service was excellent. Will definitely come back!",
        },
        {
            name: "Lisa K.",
            service: "Orthodontics",
            rating: 5,
            review: "Got clear aligners here. Very convenient, can remove when eating. Doctor follows up on treatment regularly. My teeth are beautifully aligned now!",
        },
    ];

    return (
        <section id="reviews" className="py-20 lg:py-28 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a02595]/10 via-transparent to-orange-400/10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                        Patient Reviews
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        What Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
                            Patients Say
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center gap-1 text-amber-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-white/80 leading-relaxed mb-6">&ldquo;{review.review}&rdquo;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7931E] to-[#a02595] flex items-center justify-center text-white font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{review.name}</p>
                                    <p className="text-sm text-white/80">{review.service}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
