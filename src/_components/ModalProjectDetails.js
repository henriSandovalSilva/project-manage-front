/* eslint-disable react/prop-types */
import React from 'react';
import { parseISO, format } from 'date-fns';

import { Modal, ModalHeader, ModalBody, Table } from 'reactstrap';

export default function ModalProjectDetails({
  minutesWorked,
  modalOpen,
  openProjectDetails,
}) {
  return (
    <Modal isOpen={modalOpen}>
      <ModalHeader toggle={() => openProjectDetails()}>
        Detalhe dos minutos trabalhados
      </ModalHeader>
      <ModalBody>
        <Table>
          <thead>
            <tr>
              <th>Data do registro</th>
              <th>Minutos</th>
              <th>Usuário</th>
            </tr>
          </thead>
          <tbody>
            {minutesWorked.map(data => (
              <tr key={data.id}>
                <td>{format(parseISO(data.date), 'dd/MM/yy hh:mm')}</td>
                <td>{data.minutes_worked}</td>
                <td>{data.user.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
    </Modal>
  );
}
