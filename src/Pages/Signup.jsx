import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserAuth } from "../Constants/AuthContext";

export default function Signup() {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [error, SetError] = useState();
  const [loading, SetLoading] = useState();
  
const {session} = UserAuth();
console.log(session);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Create your account</h2>
                <p className="text-center text-muted mb-4">
                  Join our shopping community and start exploring amazing deals!
                </p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn" style={{ backgroundColor: "#BB2D3B", color: "white" }}>
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
