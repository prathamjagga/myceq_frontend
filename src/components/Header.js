import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <Link to="/">All Assignments</Link>
      </div>
      <div>
        <Link to="/Python">Python</Link>
      </div>
      <div>
        <Link to="/Terraform">Terraform</Link>
      </div>
      <div>
        <Link to="/submit">Submit Assignment</Link>
      </div>
    </>
  );
};

export default Header;
