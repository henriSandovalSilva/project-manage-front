/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Modal, ModalHeader, InputGroup, Input } from 'reactstrap';

import { ModalBody, Button } from './styles';

export default function ModalRegisterMinutesWorked({
  modalMinutesOpen,
  openRegisterMinutesWorked,
}) {
  const [inputMinutes, setInputMinutes] = useState([]);

  function handleSavedMinutesWorked() {
    console.log(inputMinutes);
  }

  return (
    <Modal isOpen={modalMinutesOpen}>
      <ModalHeader toggle={() => openRegisterMinutesWorked()}>
        Registrar minutos trabalhados
      </ModalHeader>
      <ModalBody>
        <InputGroup>
          <Input onChange={e => setInputMinutes(e.target.value)} />
        </InputGroup>
        <Button
          size="sm"
          outline
          color="info"
          onClick={() => handleSavedMinutesWorked()}
        >
          Salvar
        </Button>
      </ModalBody>
    </Modal>
  );
}
