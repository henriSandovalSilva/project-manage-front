import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function Example() {
  // const toggle = toggle.bind(this);

  return (
    <div>
      <Navbar color="white" expand="xs">
        <NavbarBrand href="/">ProjectManage</NavbarBrand>
      </Navbar>
    </div>
  );
}
