import styled from 'styled-components';

import {
  ListGroupItem as ListGroupItemBootstrap,
  Button as ButtonBootstrap,
} from 'reactstrap';

export const Container = styled.div`
  width: 600px;
  margin: 15px auto;
`;

export const ListGroupItem = styled(ListGroupItemBootstrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(ButtonBootstrap)`
  margin: 5px;
`;
