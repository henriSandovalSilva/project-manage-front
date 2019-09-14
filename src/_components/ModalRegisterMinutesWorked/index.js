/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import { Modal, ModalHeader, InputGroup, Input } from 'reactstrap';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { ModalBody, Button, DatePickerStyled } from './styles';

export default function ModalRegisterMinutesWorked({
  projectId,
  modalMinutesOpen,
  openRegisterMinutesWorked,
  setReloadProjects,
}) {
  const [inputMinutes, setInputMinutes] = useState([]);
  const [inputDate, setInputDate] = useState(new Date());

  async function saveMinutesWorked() {
    const response = await api.post('/minutes', {
      project_id: projectId,
      date: inputDate,
      minutes_worked: inputMinutes,
    });

    if (response.status === 200) {
      toast.success('Salvo com sucesso.');
      setReloadProjects(true);
      openRegisterMinutesWorked();
    } else {
      toast.error('Ocorreu um erro ao salvar.');
    }
  }

  return (
    <Modal isOpen={modalMinutesOpen}>
      <ModalHeader toggle={() => openRegisterMinutesWorked()}>
        Registrar minutos trabalhados
      </ModalHeader>
      <ModalBody>
        <InputGroup>
          <Input
            placeholder="Minutos trabalhados"
            onChange={e => setInputMinutes(e.target.value)}
          />
          <DatePickerStyled
            selected={inputDate}
            dateFormat="dd/MM/yy h:mm"
            timeIntervals={15}
            showTimeSelect
            strictParsing
            onChange={date => {
              setInputDate(date);
            }}
          />
        </InputGroup>
        <Button
          size="sm"
          outline
          color="info"
          onClick={() => saveMinutesWorked()}
        >
          Salvar
        </Button>
      </ModalBody>
    </Modal>
  );
}
