import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdvertsList from "../components/AdvertsList/AdvertsList";
import { selectAdverts, selectPage } from "../redux/adverts/selectors";
import css from "../components/Layout/Layout.module.css";
import { getAllAdverts } from "../redux/adverts/operations";
import { nextPage } from "../redux/adverts/advertsSlice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);
  const totalAdverts = 13;
  const maxOnPage = Math.ceil(totalAdverts / 4);

  useEffect(() => {
    dispatch(getAllAdverts(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  return (
    <div className={css.contentContainer}>
      <div className={css.queryForm}></div>
      <div className={css.advertsList}>
        {<AdvertsList array={adverts} />}
        {page < maxOnPage && (
          <button onClick={handleLoadMore} className={css.loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
