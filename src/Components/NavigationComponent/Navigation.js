import React, { useState } from "react";
import history from "../../history";
import "./Style.css";

export default function Navigation() {
  const [click, setclick] = useState(true);
  return (
    <div>
      <div className="navigation">
        <div className="navContainer">
          <ul className={click ? "ulnavContainer" : "ulnavContainermob"}>
            <li className="navitems " onClick={() => history.push("/")}>
              Home
            </li>
            <li className="navitems " onClick={() => history.push("/about")}>
              About
            </li>
            <li className="navitems " onClick={() => history.push("/contact")}>
              Contact
            </li>
          </ul>
        </div>
        <i
          className={click ? "fa fa-bars fa-lg" : "fa fa-times fa-lg"}
          onClick={() => setclick(!click)}
        ></i>
      </div>
    </div>
  );
}
