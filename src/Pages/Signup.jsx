// import React from "react";
// import { Form, Field, ErrorMessage, Formik } from "formik";
// import * as Yup from "yup";
// import TextError from "../Components/TextError";
// import '../Pages/Styles/Home.css'
// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
// };

// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email format").required("Required"),
//   password: Yup.string().required("Required"),
// });

// const onSubmit = (values) => {
//   console.log(`Form data`, values);
// };

// export default function Signup() {
//   return (
//     <div className="container-account">
//       <div>
//         <h3>Sign Up</h3>
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
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                   />
//                   <ErrorMessage name="email" component={TextError} />
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
//                   Sign Up
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
const Signup = () => {
  return (
    <React.Fragment>
      <div className="signup-form">
        <div>
          <h2>Sign up</h2>
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              placeholder="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
          <div>
            <p className="fs-6 lh-base">
              By registering I confirm that I've read and accept Vinted <strong>Terms &
              Conditions </strong> and <strong>Privacy</strong> Policy. I confirm I'm at least 18 years old
              and I agree to receiving special offers and promotions.
            </p>
          </div>
          <button type="submit" className="signup-btn btn">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signup;
