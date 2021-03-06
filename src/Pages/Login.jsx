// import React from "react";
// import { Form, Field, ErrorMessage, Formik } from "formik";
// import * as Yup from "yup";
// import TextError from "../Components/TextError";

// const initialValues = {
//   name: "",
//   password: "",
// };

// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   password: Yup.string().required("Required"),
// });

// const onSubmit = (values) => {
//   console.log(`Form dat`, values);
// };

// export default function Login() {
//   return (
//     <div className="container-account">
//       <div>
//         <h3>Login</h3>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {(formik) => {
//             return (
//               <Form>
//                 <div className="form-control">
//                   <Field
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Username"
//                   />
//                   <ErrorMessage name="name" component={TextError} />
//                 </div>

//                 <div className="form-control">
//                   <Field
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Password"
//                   />
//                   <ErrorMessage name="password" component={TextError} />
//                 </div>

//                 <button className="button " type="submit">
//                   Login
//                 </button>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Styles/Forms.css";
const Login = () => {
  return (
    <React.Fragment>
      <div className="main-form">
        <div>
          <h2>Sign in</h2>
        </div>
        <form className="form">
          <div className="mb-3">
            <label htmlFor="exampleInputUser" className="form-label">
              User name
            </label>
            <input
              required
              placeholder="username"
              type="text"
              className="form-control"
              id="exampleInputUser"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              required
              placeholder="enter password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="signup-btn btn">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
