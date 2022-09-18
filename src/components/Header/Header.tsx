import React from "react";
import logo from "../../assets/images/logo.svg";
import {Head, Logotype, Navline, Navbar, NavbarElements, NavLink} from "../../styles/styles"

function Header() {
  return (
    <Head className="header">
      <Logotype src={logo}></Logotype>
        <Navline className="navigation">
        
          <Navbar className="navbar">
            <NavbarElements>
              <NavLink href="#">Обо мне</NavLink>
            </NavbarElements>
            <NavbarElements>
              <NavLink href="#">Проекты</NavLink>
            </NavbarElements>
            <NavbarElements>
              <NavLink href="#">Заказать разработку сайта</NavLink>
            </NavbarElements>
            <NavbarElements>
              <NavLink href="#">Обратная связь</NavLink>
            </NavbarElements>
          </Navbar>
        </Navline>
      </Head>
  );
}

export default Header;
