import React from "react";
import SearchName from "./SearchName.js";
// eslint-disable-next-line 
import SearchDOB from "./SearchDOB.js";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse row" id="navbarNav">
        {/* <div className="input-group col-8">
          <SearchDOB />
        </div> */}
        <div className="search-area col-4">
          <SearchName />
        </div>
      </div>
    </nav>
  );
}
export default Nav;