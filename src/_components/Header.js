import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function Example() {
  // const toggle = toggle.bind(this);

  return (
    <div>
      <Navbar color="white" expand="xs">
        <NavbarBrand href="/">ProjectManage</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Olá, usuário!</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
