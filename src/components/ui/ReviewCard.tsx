import { TReview } from '@/libs/reviews'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const ReviewCard = ({review}: {review: TReview}) => {
    return (
        <div
            className="bg-card-background p-4 border border-common-border rounded-xl"
        >
            <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-16 w-16 border-2 border-[#2a2f4a]">
                    <AvatarImage src={review.image || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback className="bg-[#2a2f4a] text-white">
                        {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">{review.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{review.location}</p>
                    <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{`"${review.text}"`}</p>
        </div>
    )
}

export default ReviewCard
