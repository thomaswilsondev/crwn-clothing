import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  height: 9vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: #f8e8ee;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90px;
  padding: 25px;
  margin-left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 35px;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: "1rem" 
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 700;
  margin: 15px;
  transition: all 0.3s;
  color:#495057;


  &:hover {
    color: #212529;
  }
`;
