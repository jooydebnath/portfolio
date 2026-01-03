export type TReview = {
  name: string
  location: string
  image: string
  rating: number
  text: string
}

export const reviews: TReview[] = [
  {
    name: "Maria Rodriguez",
    location: "Spain",
    image: "/professional-woman-developer.png",
    rating: 5,
    text: "Exceptional Django developer! Built a robust REST API with perfect authentication and authorization. The code quality was outstanding, well-documented, and followed best practices. Database optimization was impressive and will definitely hire again for backend projects.",
  },
  {
    name: "James Chen",
    location: "Singapore",
    image: "/professional-man-developer.png",
    rating: 5,
    text: "Outstanding work on our Django backend! Implemented complex database relationships, created efficient queries, and integrated Celery for async tasks seamlessly. Very knowledgeable about Python and Django ORM. Highly recommend for any backend development.",
  },
  {
    name: "Sarah Williams",
    location: "USA",
    image: "/professional-woman-tech-lead.png",
    rating: 5,
    text: "Fantastic experience! Delivered a scalable Django application with PostgreSQL, Redis caching, and comprehensive API documentation. The deployment process was smooth and the code is maintainable. Perfect for enterprise-level Python backend development.",
  },
  {
    name: "Sarah Williams",
    location: "USA",
    image: "/professional-woman-tech-lead.png",
    rating: 5,
    text: "Fantastic experience! Delivered a scalable Django application with PostgreSQL, Redis caching, and comprehensive API documentation. The deployment process was smooth and the code is maintainable. Perfect for enterprise-level Python backend development.",
  },
  {
    name: "Sarah Williams",
    location: "USA",
    image: "/professional-woman-tech-lead.png",
    rating: 5,
    text: "Fantastic experience! Delivered a scalable Django application with PostgreSQL, Redis caching, and comprehensive API documentation. The deployment process was smooth and the code is maintainable. Perfect for enterprise-level Python backend development.",
  },
]
