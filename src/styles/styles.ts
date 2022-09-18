import styled from "styled-components";

// header

export const Head = styled.div`
  height: 90px;
  width: 100%;
  background-color: #000;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

export const Logotype = styled.div`
  padding-left: 20px;
  height: 100%;
`;

export const Navline = styled.nav`
  height: 100%;
  display: flex;
`;

export const Navbar = styled.ul`
  display: inline-flex;
  text-decoration: none;
  list-style-type: none;
  align-items: center;
`;

export const NavbarElements = styled.li`
  padding-left: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-family: "HaussMedium", serif;
`;
