import React, { useState } from "react";
import axios from "../../api/axios"; // Import Axios instance
import "./CreateAAccount.css";
import { Link } from "react-router-dom";

function CreateAAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName) {
      errors.firstName = "First Name is required";
    }

    if (!lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    } else if (
      !(email.startsWith("7278") && email.endsWith("@skct.edu.in")) &&
      !email.endsWith("@skct.edu.in")
    ) {
      errors.email =
        "Email must start with '7278' and end with '@skct.edu.in' for student role, or end with '@skct.edu.in' for admin role";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const determineRole = (email) => {
    if (email.startsWith("7278") && email.endsWith("@skct.edu.in")) {
      return "student";
    } else if (email.endsWith("@skct.edu.in")) {
      return "admin";
    }
    return "unknown"; // Default role if none of the conditions match
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const fullName = `${firstName} ${lastName}`;
        const role = determineRole(email);

        // Only proceed if the role is valid
        if (role !== "unknown") {
          await axios.post("/auth/signup", {
            fullName,
            email,
            password,
            role, // Include the role in the POST request
          });
          setSuccessMessage(
            "Account created successfully. You can now sign in."
          );
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          setErrors({ form: "Invalid email address for role assignment" });
        }
      } catch (error) {
        setErrors({ form: "An error occurred while creating the account" });
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup__left">
        <div className="signup__header">
          <div className="signup__header__logo">
            <p className="signup__header__logo__p">Snap Talk Analyzer.</p>
          </div>
        </div>
        <div className="signup__left__body">
          <div className="signup__left__body__title">
            <div className="signup__left__body__title__free">
              <p className="signup__left__body__title__free__p">
                START FOR FREE
              </p>
            </div>
            <div className="signup__left__body__title__create">
              <p className="signup__left__body__title__create__p">
                Create new account.
              </p>
            </div>
            <div className="signup__left__body__title__member">
              <p className="signup__left__body__title__member__p">
                Already A Member?
              </p>
              <Link to={"/"}>
                <p className="signup__left__body__title__member__login__p">
                  Log In
                </p>
              </Link>
            </div>
          </div>
          <form
            className="signup__left__body__title__form"
            onSubmit={handleSubmit}
          >
            <div className="signup__left__body__title__form">
              <div className="signup__left__body__title__form__name">
                <div className="signup__left__body__title__form__name__first">
                  <div className="input-container">
                    <input
                      value={firstName}
                      className="input-with-icon"
                      placeholder="First name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <img
                      className="input-icon"
                      src="./src/assets/name.png"
                      alt="User Icon"
                    />
                    {errors.firstName && (
                      <div className="error">{errors.firstName}</div>
                    )}
                  </div>
                </div>
                <div className="signup__left__body__title__form__name__last">
                  <div className="input-container">
                    <input
                      value={lastName}
                      className="input-with-icon"
                      placeholder="Last name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <img
                      className="input-icon"
                      src="./src/assets/name.png"
                      alt="User Icon"
                    />
                    {errors.lastName && (
                      <div className="error">{errors.lastName}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="signup__left__body__title__form__email">
                <div className="input-container-email">
                  <input
                    value={email}
                    className="input-with-icon-email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <img
                    className="input-icon-email"
                    src="./src/assets/email.png"
                    alt="Email Icon"
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
              </div>
              <div className="signup__left__body__title__form__password">
                <div className="input-container-pass">
                  <input
                    value={password}
                    className="input-with-icon-pass"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    className="input-icon-pass"
                    src="./src/assets/password.png"
                    alt="Password Icon"
                  />
                  {errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
              </div>
              <div className="signup__left__body__title__form__buttons">
                <button className="signup__left__body__title__form__buttons">
                  Create account
                </button>
              </div>
              <div className="success-message__container">
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="signup__right">
        <img
          className="signup__right__img"
          src="./src/assets/create a accountfinal.png"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default CreateAAccount;
