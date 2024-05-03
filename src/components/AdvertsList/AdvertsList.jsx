import React from "react";
import css from "./AdvertsList.module.css";

const AdvertsList = ({ array }) => {
  return (
    <ul className={css.campList}>
      {array.map(
        ({
          _id,
          name,
          price,
          gallery,
          rating,
          reviews,
          description,
          adults,
          location,
          transmission,
          engine,
          beds,
        }) => (
          <li key={_id} className={css.listItem}>
            <img src={gallery[0]} className={css.itemImg} alt="camp-photo" />
            <div className={css.itemInfo}>
              <div className={css.itemTitle}>
                <p className={css.itemName}>{name}</p>
                <div className={css.itemPriceNBtn}>
                  <span className={css.itemPrice}>{price}</span>
                  <button className={css.favoriteBtn}>
                    <svg width={30} height={30} className={css.favoriteSvg}>
                      <use></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={css.itemRating}>
                <svg width={16} height={16} className={css.ratingSvg}>
                  <use></use>
                </svg>
                <span
                  className={css.ratingNReviews}
                >{`${rating}(${reviews.length} Reviews)`}</span>
                <div className={css.itemLocation}>
                  <svg width={16} height={16}>
                    <use></use>
                  </svg>
                  <span>{location}</span>
                </div>
              </div>
              <p className={css.itemDescription}>{description}</p>
              <ul className={css.itemDetails}>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use></use>
                  </svg>
                  <span className={css.detail}>{adults} Adults</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use></use>
                  </svg>
                  <span className={css.detail}>{transmission}</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use></use>
                  </svg>
                  <span className={css.detail}>{engine}</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use></use>
                  </svg>
                  <span className={css.detail}>Kitchen</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use></use>
                  </svg>
                  <span className={css.detail}>{beds} Beds</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use></use>
                  </svg>
                  <span className={css.detail}>AC</span>
                </li>
              </ul>
              <button className={css.showMore}>Show more</button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default AdvertsList;
