/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { MdAccessTime, MdViewList } from 'react-icons/md';

import { ListGroup } from 'reactstrap';

import ModalProjectDetails from '../ModalProjectDetails';
import ModalRegisterMinutesWorked from '../ModalRegisterMinutesWorked';

import { Container, ListGroupItem, Button } from './styles';

export default function Project({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMinutesOpen, setModalMinutesOpen] = useState(false);

  function openProjectDetails() {
    setModalOpen(prevModal => !prevModal);
  }

  function openRegisterMinutesWorked() {
    setModalMinutesOpen(prevModal => !prevModal);
  }

  return (
    <Container>
      <div className="cardbox">
        <div key={project.id} className="cardbox-body">
          <ListGroup>
            <ListGroupItem>
              {project.name}
              <div>
                <Button
                  size="sm"
                  outline
                  color="info"
                  onClick={() => openRegisterMinutesWorked()}
                >
                  <MdAccessTime />
                </Button>
                <Button
                  size="sm"
                  outline
                  color="info"
                  onClick={() => openProjectDetails()}
                >
                  <MdViewList />
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>

        <ModalProjectDetails
          minutesWorked={project.minutesWorked}
          modalOpen={modalOpen}
          openProjectDetails={openProjectDetails}
        />
        <ModalRegisterMinutesWorked
          modalMinutesOpen={modalMinutesOpen}
          openRegisterMinutesWorked={openRegisterMinutesWorked}
        />
      </div>
    </Container>
  );
}
