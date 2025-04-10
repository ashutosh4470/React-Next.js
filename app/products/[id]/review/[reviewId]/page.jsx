import React from 'react'
import { notFound } from 'next/navigation';
const Review = async ({ params }) => {
    const { id,reviewId } = await params;
    if(reviewId > 1000)
        notFound();
    return (
        <div>
            <h2>Product Id : {id}</h2>
            <h2>Review : {reviewId}</h2>
        </div>
    )
}

export default Review