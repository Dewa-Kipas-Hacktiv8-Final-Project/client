// import { useState } from "react";
import { useHistory } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import logoImage from "../assets/horse.png"

export default function Nav() {
  // const [color, setColor] = useState("btn btn-outline-dark");
  // function changeColor(e) {
  //   if (e === "over") {
  //     setColor("btn btn-outline-warning");
  //   } else {
  //     setColor("btn btn-outline-dark");
  //   }
  // }
  const history = useHistory();

  async function logout() {
    await localStorage.clear();
    await history.push("/login");
  }
  return (
    // <div
    //   className="col-12"
    //   style={{
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     backgroundColor: "#161512",
    //   }}
    // >
    //   <Button
    //     variant="secondary"
    //     className={color}
    //     style={{backgroundColor: "#161512"}}
    //     // onMouseOver={() => changeColor("over")}
    //     // onMouseLeave={() => changeColor("leave")}
    //     onClick={() => logout()}
    //   >
    //     <i className="fas fa-sign-out-alt" style={{ color: "black" }} />
    //     <span>&nbsp;Log Out</span>
    //   </Button>
    // </div>
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <div className="d-flex align-items-center">
          <img src={logoImage} className="mr-3" alt="logo" width="45" height="39"></img>
          <span className="navbar-brand m-1 h1" style={{fontSize: "23px"}}>DEWA KIPAS</span>
        </div>
      </div>
      <button
        className="btn btn-outline-light"
        style={{ justifyContent: "flex-end" }}
        onClick={() => logout()}
      >
        <i className="fas fa-sign-out-alt" style={{ color: "white" }} />
        <span>&nbsp;Log Out</span>
      </button>
    </nav>
  );
}
