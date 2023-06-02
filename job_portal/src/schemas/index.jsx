import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;
const pincode=/^[1-9]{1}\d{2}\s?\d{3}$/gm;
export const signupUpSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("full name required"),
  email: Yup.string().email().required("email required"),
  mobNo: Yup.string()
    .matches(phoneRegExp, "invalid mob no")
    .required("mob no required"),

  password: Yup.string()
    .min(8, "password must be 8 or more character")
    .required("password required")
    .minLowercase(1, "password must contain at least 1 lower case letter")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number")
    .minSymbols(1, "password must contain at least 1 special character"),

  address: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  pincode: Yup.string()
  .matches(pincode, "invalid pincode")
  .required("pincode required"),
  experience: Yup.string().required(),
  skill: Yup.string().required(),
});
