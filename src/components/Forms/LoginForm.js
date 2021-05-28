import { useFormik } from "formik";
import * as Yup from "yup";

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
    <form onSubmit={formik.handleSubmit}>
      <fieldset>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <pre>{formik.errors.email}</pre>}
      </fieldset>

      <fieldset>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <pre>{formik.errors.password}</pre>}
      </fieldset>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
