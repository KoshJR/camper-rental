import { nanoid } from "nanoid";
import css from "./Features.module.css";
import { icons } from "../../assets/index";
import ContactForm from "../ContactForm/ContactForm";



const Features = ({ advert }) => {
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    adults,
    transmission,
  } = advert;
  return (
    <div className={css.form_wrapper}>
      <div>
        <div className={css.features_wrapper}>
          <ul className={css.list_wrapper}>
            {adults && (
              <li key={nanoid()} className={css.details_item}>
                <svg width={20} height={20} className={css.svg_details}>
                  <use href={`${icons}#icon-users`}></use>
                </svg>
                <span className={css.details_text}>{adults} adults</span>
              </li>
            )}
            {transmission && (
              <li key={nanoid()} className={css.details_item}>
                <svg width={20} height={20} className={css.svg_details}>
                  <use href={`${icons}#icon-transmission`}></use>
                </svg>
                <span className={css.details_text}>{transmission}</span>
              </li>
            )}
            {Object.entries(advert.details).map(
              ([key, value]) =>
                Boolean(value) && (
                  <li key={nanoid()} className={css.details_item}>
                    <svg width={20} height={20} className={css.svg_details}>
                      <use href={`${icons}#icon-${key}`}></use>
                    </svg>
                    <span className={css.details_text}>{key}</span>
                  </li>
                )
            )}
          </ul>
        </div>
        <div>
          <p className={css.text}>Vehicle details</p>
          <ul className={css.tech_list}>
            {Object.entries({
              form,
              length,
              width,
              height,
              tank,
              consumption,
            }).map(([key, value]) => (
              <li key={nanoid()} className={css.tech_item}>
                <p className={css.item_text}>{key}</p>
                <p className={css.item_text}>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Features;
