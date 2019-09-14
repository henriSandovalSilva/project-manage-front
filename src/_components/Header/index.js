import React from 'react';
import { useDispatch } from 'react-redux';

import { Navbar, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';

import { doLogout } from '../../store/modules/auth/actions';

import { store } from '../../store';

import { Nav } from './styles';

export default function Example() {
  const userName = store.getState().auth.user.name;
  const dispatch = useDispatch();

  function logout() {
    dispatch(doLogout());
  }

  return (
    <div>
      <Navbar color="white" expand="xs">
        <NavbarBrand href="/">ProjectManage</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Olá, {userName}!</NavLink>
          </NavItem>
          <NavItem>
            <Button
              onClick={() => {
                logout();
              }}
              size="sm"
              outline
              color="info"
            >
              Sair
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
