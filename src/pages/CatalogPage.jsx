import React, { useEffect, useRef, useState } from "react";
import { getAllAdverts } from "../services/api";
import AdvertsList from "../components/AdvertsList/AdvertsList";
import { Loader } from '../components/Loader/Loader'
import css from '../components/Layout/Layout.module.css'

const CatalogPage = () => {
  const [advertsCatalog, setAdvertsCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  const fetchAdvertsCatalog = async () => {
    setIsLoading(true);
    try {
      const responseData = await getAllAdverts(page, limit);
      setAdvertsCatalog(responseData);
      !responseData ? setErrorMessage(true) : setErrorMessage(false);
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAdvertsCatalog();
  }, [page, limit]);

  const handleLoadMore = () => {
    setLimit(limit + 4);
  }

  return (
    <div className={css.contentContainer}>
      <div className={css.queryForm}>Search Form</div>
      <div className={css.advertsList}>
        {isLoading && <Loader className={css.loader} />}
        {<AdvertsList array={advertsCatalog} />}
        {errorMessage && <h3>Wait a second, please ...</h3>}
        <button onClick={handleLoadMore} className={css.loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default CatalogPage;
