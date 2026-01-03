import BackButton from '@/components/ui/BackButton'
import ReviewCard from '@/components/ui/ReviewCard'
import { reviews, TReview } from '@/libs/reviews'

const page = () => {
    return (
        <div className='container mx-auto space-y-14 p-3 relative'>
            <BackButton></BackButton>
            <div className='text-center'>
                <h2 className='text-header md:text-heading text-subheading capitalize font-medium mb-4'>Happy Clients</h2>
                <p className='text-title text-small md:text-paragraph'>Hear from my clients and collaborators about their experiences working with me. These testimonials highlight my commitment to delivering high-quality projects on time, with clear communication and exceptional results.</p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    reviews.map((review: TReview, index: number) => <ReviewCard key={index} review={review}></ReviewCard>)
                }
            </div>
        </div>
    )
}

export default page
