import React from "react";
import css from "./AdvertsList.module.css";
import { icons } from "../../assets/index";
import classNames from "classnames";

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
                  <span className={css.itemPrice}>&#8364;{price}.00</span>
                  <button className={css.favoriteBtn}>
                    <svg width={24} height={24} className={css.favoriteSvg}>
                      <use href={`${icons}#icon-heart`}></use>
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
                    <use href={`${icons}#icon-adults`}></use>
                  </svg>
                  <span className={css.detail}>{adults} Adults</span>
                </li>
                <li className={css.itemDetail}>
                  <svg
                    width={20}
                    height={20}
                    className={classNames(css.itemSvg, css.itemSvgTrans)}
                  >
                    <use href={`${icons}#icon-transmission`}></use>
                  </svg>
                  <span className={css.detail}>{transmission}</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use href={`${icons}#icon-petrol`}></use>
                  </svg>
                  <span className={css.detail}>{engine}</span>
                </li>
                <li className={css.itemDetail}>
                  <svg
                    width={20}
                    height={20}
                    className={classNames(css.itemSvg, css.itemSvgTrans)}
                  >
                    <use href={`${icons}#icon-kitchen`}></use>
                  </svg>
                  <span className={css.detail}>Kitchen</span>
                </li>
                <li className={css.itemDetail}>
                  <svg
                    width={20}
                    height={20}
                    className={classNames(css.itemSvg, css.itemSvgTrans)}
                  >
                    <use href={`${icons}#icon-beds`}></use>
                  </svg>
                  <span className={css.detail}>{beds} Beds</span>
                </li>
                <li className={css.itemDetail}>
                  <svg width={20} height={20}>
                    <use href={`${icons}#icon-beds`}></use>
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
