import React from "react";
import { nanoid } from "nanoid";
import css from "./Reviews.module.css";
import { icons } from "../../assets/index";

const Reviews = ({ advert }) => {
  console.log(advert.reviews);
  return (
    <div className={css.reviews}>
      {advert.reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <div key={nanoid()} className={css.review}>
          <div className={css.reviewerBlock}>
            <div className={css.reviewerLogo}>
              <span className={css.logoLetter}>{reviewer_name.charAt(0)}</span>
            </div>
            <div className={css.reviewerNameNStars}>
              <h3 className={css.reviewerName}>{reviewer_name}</h3>
              <span className={css.starsBlock}>
                {Array.from({ length: reviewer_rating }, () => (
                  <svg
                    key={nanoid()}
                    width={16}
                    height={16}
                    className={css.svgStar}
                  >
                    <use href={`${icons}#icon-Rating`}></use>
                  </svg>
                ))}
                {Array.from({ length: 5 - reviewer_rating }, () => (
                  <svg
                    key={nanoid()}
                    width={16}
                    height={16}
                    className={css.svgDarkStar}
                  >
                    <use href={`${icons}#icon-Rating`}></use>
                  </svg>
                ))}
              </span>
            </div>
          </div>
          {/* <div className={css.reviewerRating}>{reviewer_rating}</div> */}
          <p className={css.reviewerComment}>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
