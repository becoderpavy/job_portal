import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import homeService from "../service/home.service";
import { useFormik } from "formik";
import { signupUpSchema } from "../schemas";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  mobNo: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  roleId: 102,
  experience: "",
  skill: "",
};

const Signup = () => {
  // const [user, setUser] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   mobNo: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   pincode: "",
  //   roleId: 102,
  //   experience: "",
  //   skill: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        homeService
          .register(values)
          .then(() => {
            sMsg("Register sucessfully");
          })
          .catch((error) => {
             console.log(error);
            if (error.response?.status === 409) {
              eMsg("Email id already exist");
            }
          });

        action.resetForm();
      },
    });

  // const register = (e) => {
  //   e.preventDefault();
  //   // console.log(user);
  //   homeService
  //     .register(user)
  //     .then(() => {
  //       sMsg("Register sucessfully");
  //       setUser({
  //         fullName: "",
  //         email: "",
  //         password: "",
  //         mobNo: "",
  //         address: "",
  //         city: "",
  //         state: "",
  //         pincode: "",
  //         experience: "",
  //         skill: "",
  //       });
  //     })
  //     .catch((error) => {
  //       //console.log(error);
  //       if (error.response?.status === 409) {
  //         eMsg("Email id already exist");
  //       }
  //     });
  // };

  const sMsg = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const eMsg = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div
      className="container-fluid p-2"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card paint-card">
            <div className="card-header">
              <h3 className="text-center text-dark">User Signup</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control form-control-sm"
                      value={values.fullName}
                      // onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.fullName && touched.fullName ? (
                    <p className="text-danger">{errors.fullName}</p>
                  ) : null}
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label>Email Id</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-sm"
                      value={values.email}
                      //onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="col">
                    <label>Mobile No</label>
                    <input
                      type="number"
                      name="mobNo"
                      className="form-control form-control-sm"
                      value={values.mobNo}
                      // onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobNo && touched.mobNo ? (
                      <p className="text-danger">{errors.mobNo}</p>
                    ) : null}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-sm"
                      value={values.password}
                      //onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-danger">{errors.password}</p>
                    ) : null}
                  </div>
                </div>

                <div className="form-group mt-3">
                  <label>Address</label>
                  <textarea
                    type="text"
                    rows="3"
                    cols=""
                    className="form-control"
                    name="address"
                    value={values.address}
                    //onChange={(e) => handleChange(e)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.address && touched.address ? (
                    <p className="text-danger">{errors.address}</p>
                  ) : null}
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control form-control-sm"
                      value={values.city}
                      //onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="text-danger">{errors.city}</p>
                    ) : null}
                  </div>
                  <div className="col">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control form-control-sm"
                      value={values.state}
                      // onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.state && touched.state ? (
                      <p className="text-danger">{errors.state}</p>
                    ) : null}
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <label>Pincode</label>
                    <input
                      type="number"
                      name="pincode"
                      className="form-control form-control-sm"
                      value={values.pincode}
                      // onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.pincode && touched.pincode ? (
                      <p className="text-danger">{errors.pincode}</p>
                    ) : null}
                  </div>

                  <div className="col">
                    <label>Experience</label>
                    <input
                      type="text"
                      name="experience"
                      className="form-control form-control-sm"
                      value={values.experience}
                      // onChange={(e) => handleChange(e)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.experience && touched.experience ? (
                      <p className="text-danger">{errors.experience}</p>
                    ) : null}
                  </div>

                  <div className="col">
                    <label>Skill</label>
                    <input
                      type="text"
                      name="skill"
                      className="form-control form-control-sm"
                      value={values.skill}
                      onChange={(e) => handleChange(e)}
                      onBlur={handleBlur}
                    />
                    {errors.skill && touched.skill ? (
                      <p className="text-danger">{errors.skill}</p>
                    ) : null}
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button className="btn btn-primary col-md-12">
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center mt-2">
                <Link to="/rsignup">Recruiter Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Signup;
