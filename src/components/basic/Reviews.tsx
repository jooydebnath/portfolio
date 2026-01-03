import Heading from '../shared/Heading'
import { reviews, TReview } from '@/libs/reviews'
import ReviewCard from '../ui/ReviewCard'
import Link from 'next/link'

const Reviews = () => {
    return (
        <div id="feedback">
            <Heading text='Client Reviews'></Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.slice(0, 3).map((review: TReview, index: number) => <ReviewCard review={review} key={index}></ReviewCard>)
                }
            </div>
            <button className='mt-5 flex justify-center w-full items-center'>
                <Link className='hover:underline underline-offset-2 text-header' href={"/all-reviews"}>
                    View all reviews
                </Link>
            </button>
        </div>
    )
}

export default Reviews
