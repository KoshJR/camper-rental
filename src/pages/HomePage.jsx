import React from "react";
import css from "../components/Layout/Layout.module.css";

const HomePage = () => {
  return (
    <div className={css.homeMessage}>
      <h1 className={css.mainTitle}>Wilderness Wheels</h1>
      <p className={css.welcomeText}>
        <span> Find your dream camp,</span> and start your Journey today!{" "}
      </p>
    </div>
  );
};

export default HomePage;
