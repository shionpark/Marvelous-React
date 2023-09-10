import React from "react";
import { Link } from "react-router-dom";

function Header(props: any) {
  return (
    <>
      <Link to={"/comics"}>COMIC</Link>
      <Link to={"/series"}>SERIES</Link>
      <Link to={"/stories"}>STORY</Link>
      <Link to={"/events"}>EVENT</Link>
    </>
  );
}

export default Header;
