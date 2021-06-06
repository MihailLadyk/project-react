import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";
import photo from "../../images/photo_2021-06-06_00-53-49.jpg";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().min(3).max(255).required(),
  password: Yup.string().min(6).max(255).required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords doesn't match"
  ),
});

function RegisterForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ email, name, password }) => {
      onSubmit({
        email,
        name,
        password,
      });
    },
    validationSchema,
  });

  return (
    <div className="div">
      <img className={styles.image} src={photo} height="50" alt="" />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Sign up</h1>
        <p className={styles.welcome}>Welcome on board!</p>
        <fieldset className={styles.fieldset}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <pre>{formik.errors.email}</pre>}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <pre>{formik.errors.name}</pre>}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <pre>{formik.errors.password}</pre>}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label className={styles.label}>Confirm Password</label>
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && (
            <pre>{formik.errors.confirmPassword}</pre>
          )}
        </fieldset>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
