import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();
    localStorage.setItem("login", "true");
    Navigate("/message");
  };
  return (
    <div className="container mt-3">
      <form onSubmit={postData}>
        <div className="mb-3">
          <label className="form-label">User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="xyz.."
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="123"
            required
          />
        </div>
        <button type="submit" class="btn btn-secondary mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
