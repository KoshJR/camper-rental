import React from "react";
import {useSelector } from "react-redux";
import AdvertsList from "../components/AdvertsList/AdvertsList";
import { selectFavoritesAdverts} from "../redux/adverts/selectors";
import css from "../components/Layout/Layout.module.css";

const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavoritesAdverts);

  

  return (
    <div className={css.contentFavContainer}>
      <div className={css.advertsList}>
        {<AdvertsList array={favoriteAdverts} />}
      </div>
    </div>
  );
};

export default FavoritesPage;
