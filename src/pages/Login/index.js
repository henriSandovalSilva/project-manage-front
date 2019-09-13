import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { doLoginRequest } from '../../store/modules/auth/actions';

// import { Container } from './styles';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function login(e) {
    e.preventDefault();
    dispatch(doLoginRequest(email, password));
  }

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Form onSubmit={login}>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                onChange={handleEmailChange}
                id="email"
                name="email"
                type="email"
                placeholder="Digite aqui o seu e-mail"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Senha</Label>
              <Input
                onChange={handlePasswordChange}
                id="password"
                name="password"
                type="password"
                placeholder="Digite aqui a sua senha"
              />
            </FormGroup>
            <Button type="submit" color="primary" outline block>
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
