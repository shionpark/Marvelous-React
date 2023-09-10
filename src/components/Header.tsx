import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Logo = styled.img`
  width: 130px;
  height: 50px;
  margin: 0 auto;
  display: block;
`;

function Header() {
  return (
    <>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" />
      {/* <Link to={"/comics"}>COMIC</Link>
      <Link to={"/series"}>SERIES</Link>
      <Link to={"/stories"}>STORY</Link>
      <Link to={"/events"}>EVENT</Link> */}
    </>
  );
}

export default Header;
