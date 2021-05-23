import { useFormik } from "formik";
import * as Yup from "yup";

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
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <pre>{formik.errors.name}</pre>}
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

      <fieldset>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && (
          <pre>{formik.errors.confirmPassword}</pre>
        )}
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
