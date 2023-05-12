import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  margin-left: 35px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 35px;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 700;
  margin: 15px;
  transition: all 0.3s;

  &:last-child {
    color: #fff;
    border: 1px solid #444;
    padding: 10px 25px;
    background-color: #125c13;
    margin-right: 0px;
    border-radius: 30px;

    &:hover {
      background-color: #3e7c17;
      color: #222;
    }
  }

  &:hover {
    color: #444;
  }
`;
