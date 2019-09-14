import styled from 'styled-components';
import {
  Button as ButtonBootstrap,
  ModalBody as ModalBodyBootstrap,
} from 'reactstrap';

import DatePicker from 'react-datepicker';

export const Button = styled(ButtonBootstrap)`
  margin-left: 10px;
`;

export const ModalBody = styled(ModalBodyBootstrap)`
  display: flex;
`;

export const DatePickerStyled = styled(DatePicker)`
  margin-left: 10px;
  height: 38px;
`;
