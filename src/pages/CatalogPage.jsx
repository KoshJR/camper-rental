import React, { useEffect, useRef, useState } from "react";
import { getAllAdverts } from "../services/api";
import AdvertsList from "../components/AdvertsList/AdvertsList";

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
    <div>
      {<AdvertsList array={advertsCatalog} />}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default CatalogPage;
