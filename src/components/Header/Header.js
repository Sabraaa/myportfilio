import React from "react";
import "./Header.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSolid} from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
  return (
    <div>
      <div className="container">
        <h1> Sabra</h1>
        <div className="right-side">

          <div className="titles">
            <h6> Home </h6>
            <h6> About </h6>
            <h6> Project </h6>
            <h6> Resume </h6>
          </div>
          <button className="btn">
            <i className="fa-solid fa-sun-bright"></i>
            {/* <FontAwesomeIcon icon={solid('sun-bright')} /> */}
          </button>
        </div>

      </div>



    </div>
  );
}

export default Header;