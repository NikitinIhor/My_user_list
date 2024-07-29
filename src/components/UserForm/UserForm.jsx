import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../redux/usersOpt";
import * as Yup from "yup";
import css from "./UserForm.module.css";

const initialValues = {
  name: "",
  email: "",
  website: "",
  company: {
    name: "",
  },
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .nullable()
    .required("Required"),
  company: Yup.object().shape({
    name: Yup.string().required("Required"),
  }),
});

export default function UserForm({ onRequestClose, user }) {
  const dispatch = useDispatch();

  const id = useId();

  const isEdited = !!user;
  const newInitialValues = isEdited ? user : initialValues;

  const handleSubmit = (values, actions) => {
    isEdited
      ? dispatch(updateUser({ ...values, id: user.id }))
      : dispatch(addUser(values));

    actions.resetForm();
    onRequestClose();
  };

  return (
    <Formik
      initialValues={newInitialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={`name-${id}`}>
            name:
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>

          <Field
            className={css.field}
            type="text"
            name="name"
            id={`name-${id}`}
          />
        </div>

        <div className={css.container}>
          <label htmlFor={`email-${id}`}>
            email:
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`email-${id}`}
          />
        </div>

        <div className={css.container}>
          <label htmlFor={`website-${id}`}>
            website:
            <ErrorMessage
              className={css.error}
              name="website"
              component="span"
            />
          </label>
          <Field
            className={css.field}
            type="text"
            name="website"
            id={`website-${id}`}
          />
        </div>

        <div className={css.container}>
          <label htmlFor={`company.name-${id}`}>
            company name:
            <ErrorMessage
              className={css.error}
              name="company.name"
              component="span"
            />
          </label>
          <Field
            className={css.field}
            type="text"
            name="company.name"
            id={`company.name-${id}`}
          />
        </div>
        <div className={css.btns}>
          <button onClick={onRequestClose} className={css.btn} type="button">
            Censel
          </button>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
