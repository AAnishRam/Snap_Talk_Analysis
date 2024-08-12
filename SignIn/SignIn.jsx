import React, { useState } from "react";
import axios from "../../api/axios";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const authResponse = await axios.post("/auth/login", {
          email,
          password,
        });

        const { token, expiresIn, role } = authResponse.data; // Include role in the response

        if (token) {
          localStorage.setItem("jwtToken", token);

          const userResponse = await axios.get("/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const user = userResponse.data.find((user) => user.email === email);

          if (user) {
            dispatch(setUser({ user }));
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            console.log(user);
            // Navigate based on role
            if (user.role === "admin") {
              navigate("/admin");
            } else if (user.role === "student") {
              navigate("/dashboard");
            } else {
              setErrors({ form: "Unauthorized role" });
            }
          } else {
            setErrors({ form: "Authentication failed" });
          }
        } else {
          setErrors({ form: "Authentication failed" });
        }
      } catch (error) {
        setErrors({ form: "Invalid email or password" });
      }
    }
  };

  return (
    <div className="signin">
      <div className="signin__right">
        <img src="./src/assets/login-bg-new.png" alt="Login background" />
      </div>
      <div className="signin__left">
        <form className="signin__left__form" onSubmit={handleSubmit}>
          <div className="signin__left__title">
            <h1 className="signin__left__title__h1">Login</h1>
          </div>
          <div className="signin__left__form__email">
            <div className="signin__left__form__email__title">
              <label htmlFor="email">Email</label>
            </div>
            <div className="signin__left__form__email__input">
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="signin__left__form__password">
            <div className="signin__left__form__password__title">
              <label htmlFor="password">Password</label>
            </div>
            <div className="signin__left__form__password__input">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"} // Toggle input type based on state
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)} // Toggle the visibility
                className="signin__left__form__password__icon"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            {errors.form && <span className="error">{errors.form}</span>}
          </div>
          <div className="signin__left__form__forget">
            <p className="signin__left__form__forget__text">Forget Password?</p>
          </div>
          <div className="signin__left__form__button">
            <button type="submit">Log In</button>
          </div>
          <div className="signin__left__form__or">
            <div>
              <p>_________</p>
            </div>
            <div className="signin__left__form__or__text">
              <p>Or Continue With</p>
            </div>
            <div>
              <p>_________</p>
            </div>
          </div>
          <div className="signin__left__form__icon">
            <div className="signin__left__form__icon__div">
              <img
                className="signin__left__form__icon__png"
                src="./src/assets/google.png"
                alt="Google"
              />
            </div>
            <div className="signin__left__form__icon__div">
              <img
                className="signin__left__form__icon__png"
                src="./src/assets/facebook.png"
                alt="Facebook"
              />
            </div>
            <div className="signin__left__form__icon__div">
              <img
                className="signin__left__form__icon__png"
                src="./src/assets/apple.png"
                alt="Apple"
              />
            </div>
          </div>
          <div className="signin__left__form__dont">
            <div>
              <p>Don't have an account?&nbsp;</p>
            </div>
            <Link to={"/signup"}>
              <div>
                <p className="sign-up">Sign Up&nbsp;</p>
              </div>
            </Link>
            <div>
              <p>here</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
