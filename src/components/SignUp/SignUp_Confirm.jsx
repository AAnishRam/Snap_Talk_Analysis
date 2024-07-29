import React from "react";
import "./SignUp_Confirm.css";
import { Link } from "react-router-dom";

function SignUp_Confirm() {
  return (
    <div className="main-container">
      <div className="modal-container">
        <div className="modal-inner">
          <div className="modal-header">
            <span className="welcome">Welcome</span>
          </div>

          <div className="modal-body">
            <div className="selection">
              <span className="sub">
                If you already have an account, you can sign in with the same
                credentials.
                <br />
                If you don’t have an account, don’t worry! We’ll create one for
                you.
              </span>
            </div>
          </div>

          <div className="modal-footer">
            <div className="login-selection__footer">
              <Link to={"/signup"}>
                <button className="btn btn__secondary btn__outline">
                  <span className="btn__text">No, let’s create an account</span>
                </button>
              </Link>
              <Link to={"/signin"}>
                <button className="btn btn__secondary btn__outline">
                  <span className="btn__text">I do, let’s sign in</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp_Confirm;
