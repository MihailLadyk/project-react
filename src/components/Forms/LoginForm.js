import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import photo from "../../images/photo_2021-06-06_00-53-49.jpg";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(255).required(),
});

function LoginForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <div className="div">
      <img className={styles.image} src={photo} height="50" alt="" />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <fieldset className={styles.fieldset}>
          <h1>Login</h1>

          <p className={styles.welcome}>Welcome back!</p>
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

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
