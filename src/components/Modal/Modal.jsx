import React, { useState } from "react";
import Modal from "react-modal";
import css from "./Modal.module.css";
import { icons } from "../../assets/index";
import { nanoid } from "nanoid";
import classNames from "classnames";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import ContactForm from "../ContactForm/ContactForm";
Modal.setAppElement("#root");

const ModalAdvert = ({ modalIsOpen, closeModal, advert }) => {
  const customStyles = {
    content: {
      top: "40px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      margin: "0 auto",
      transform: "translate(-50%)",
      padding: "0",
      borderRadius: "20px",
    },
    overlay: {
      backgroundColor: "rgba(17, 18, 19, 0.4)",
      overflow: "auto",
    },
  };
  const [activeTab, setActiveTab] = useState(1);

  const { name, rating, reviews, location, price, gallery, description } =
    advert;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={css.contentWrapper}>
          <button className={css.btnClose} onClick={closeModal}>
            <svg className={css.svgClose} width={32} height={32}>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
          <h3 className={css.title}>{name}</h3>
          <div className={css.ratingWrapper}>
            <svg width={16} height={16} className={css.svgStar}>
              <use href={`${icons}#icon-Rating`}></use>
            </svg>
            <span
              className={css.ratingText}
            >{`${rating}(${reviews.length} Reviews)`}</span>
            <div className={css.locationWrapper}>
              <svg width={16} height={16} className={css.svgLocation}>
                <use href={`${icons}#icon-map-pin`}></use>
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <p className={css.price}>&#8364;{price}</p>
          <div className={css.wrapperScroll}>
            <ul className={css.imgList}>
              {gallery.map((img) => (
                <li className={css.imgItem} key={nanoid()}>
                  <img src={img} alt="car-photo" />
                </li>
              ))}
            </ul>
            <p className={css.description}>{description}</p>
          </div>

          <div className={css.tabWrapper}>
            <button
              onClick={() => handleTabClick(1)}
              className={classNames(
                css.tabs,
                activeTab === 1 ? css.activeTab : ""
              )}
            >
              Features
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={classNames(
                css.tabs,
                activeTab === 2 ? css.activeTab : ""
              )}
            >
              Reviews
            </button>
          </div>
          <div className={css.infoWrapper}>
            {activeTab === 1 && <Features advert={advert} />}
            {activeTab === 2 && <Reviews advert={advert} />}
            <ContactForm />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAdvert;
