import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { icons } from "../../assets/index";



const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  comment: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  comment: "",
  bookingDate: null,
};

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    window.location.reload();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={css.form_wrapper}>
            <p className={css.title}>Book your campervan now</p>
            <p className={css.subtitle}>
              Stay connected! We are always ready to help you.
            </p>
            <div>
              <label htmlFor="name"></label>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div>
              <label htmlFor="email"></label>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <div>
              <label htmlFor="bookingDate"></label>
              <Field name="bookingDate" className={css.date}>
                {({ field, form }) => (
                  <DatePicker
                    className={css.input}
                    {...field}
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                    placeholderText="Booking date"
                  />
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="comment"></label>
              <Field
                as="textarea"
                name="comment"
                className={css.comment}
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>
            <button
              className={css.btn_send}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
