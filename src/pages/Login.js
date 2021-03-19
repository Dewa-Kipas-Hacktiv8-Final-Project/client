import axios from "../api/axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  const [validate, setValidate] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    try {
      e.preventDefault();
      setValidate(true);
      if (email || password) {
        const { data } = await axios({
          method: "post",
          url: "users/login",
          data: { email, password },
        });
        console.log(data);
        localStorage.access_token = data.access_token;
        history.push("/");
      }
    } catch ({ response }) {
      console.log(response.data, "<<<<<<<<<<");
    }
  }
  return (
    <div className="row">
      <div className="col-4"></div>

      <div className="col-4">
        <h1>Login</h1>

        <form
          className={
            !validate ? "needs-validation" : "needs-validation was-validated"
          }
          noValidate
          onSubmit={(e) => login(e)}
        >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please fill it</div>
          </div>

          <div className="mb-3" hidden>
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please fill it</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please fill it</div>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </form>
      </div>

      <div className="col-4"></div>
    </div>
  );
}
