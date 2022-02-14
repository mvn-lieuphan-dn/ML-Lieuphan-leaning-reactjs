import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Formik } from 'formik';

function LoginForm() {
  const auth = useAuth()
  return (
    <div className="page-login">
      <div className="container">
        <h2 className="text-center mg-t-10 mg-b-5">LOGIN</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              auth.login(values.email, values.password)
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group mg-b-6">
                <label htmlFor="email" className="mg-b-3">Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-control"
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="form-group mg-b-6">
                <label htmlFor="password" className="mg-b-3">Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="form-control"
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button type="submit" className="btn btn-primary mg-b-6" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      
    </div>
  );
}

export default LoginForm;
