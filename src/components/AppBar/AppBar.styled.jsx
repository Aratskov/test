import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  
  padding-top: 30px;
  height: 100vh;
  border-right: 1px solid black;
`;

export const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  width:100%;

  padding: 10px ;

  text-decoration: none;
  color: black;

  font-size: 18px;
  font-weight: 700;

  &.active {
    text-align: right;
    color: #ffffff;
    background-color: blue;
  }

  &:hover:not(.active) {
    color: orange;
  }
`;
