import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
 import { signup } from "../redux/features/authSlice";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error, user } = useSelector((state) => ({ ...state.auth }));

  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [evalue,setEvalue] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password=== confirmPassword)
    {
      
    

    if (email && password && firstName && lastName && confirmPassword) {
      console.log(formValue);
      dispatch(signup({ formValue, navigate, toast }));
      console.log(user);
    }
  }
  else{
    setEvalue("passwords should match")

  }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBCardBody>
          <MDBIcon fas icon="user-circle" className="fa-2x"></MDBIcon>
          <h5>Sign up</h5>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-6">
              <MDBInput
                label="firstName"
                type="text"
                value={firstName}
                name="firstName"
                onChange={onInputChange}
                required
                invalid
                validation="please provide first name"
              ></MDBInput>
            </div>
            <div className="col-md-6">
              <MDBInput
                label="lastName"
                type="text"
                value={lastName}
                name="lastName"
                onChange={onInputChange}
                required
                invalid
                validation="please provide last name"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBInput
                label="email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="please provide email"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBInput
                label="password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid
                validation="please provide password"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBInput
                label="password confirm"
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={onInputChange}
                required
                invalid
                validation="please provide confirm password"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Register
              </MDBBtn>
              <div>
                <p>{evalue && evalue}</p>
                <p>{error && error}</p>
              </div>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an account, then sign in</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Register;
