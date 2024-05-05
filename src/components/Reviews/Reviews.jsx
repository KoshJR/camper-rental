import React from "react";
import { nanoid } from "nanoid";
import css from "./Reviews.module.css"

const Reviews = ({ advert }) => {
  console.log(advert.reviews);
  return (
    <div className={css.reviews}>
      {advert.reviews.map(
        ({ reviewer_name, reviewer_rating, comment }) => (
          <div key={nanoid()} className={css.review}>
            <h3 className={css.reviewerName}>{reviewer_name}</h3>
            <div className={css.reviewerRating}>{reviewer_rating}</div>
            <p className={css.reviewerComment}>{comment}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Reviews;
