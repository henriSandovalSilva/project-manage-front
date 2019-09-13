import React, { useEffect, useState } from 'react';

import {
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  InputGroup,
  Input,
} from 'reactstrap';

import api from '../../services/api';

export default function Home() {
  const [inputMinutes, setInputMinutes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectOpenInModal, setProjectOpenInModal] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalRegisterMinutesWorked, setModalRegisterMinutesWorked] = useState(
    false
  );

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');
      setProjects(response.data);
    }

    loadProjects();
  }, []);

  function openProjectDetails(projectIndex) {
    if (projectIndex === 0 || projectIndex > 0) {
      setProjectOpenInModal(projects[projectIndex].minutesWorked);
    }

    setModal(prevModal => !prevModal);
  }

  function openRegisterMinutesWorked() {
    setModalRegisterMinutesWorked(prevModal => !prevModal);
  }

  function handleSavedMinutesWorked() {
    console.log(inputMinutes);
  }

  return (
    <div className="cardbox">
      {projects.map((project, index) => (
        <div key={project.id} className="cardbox-body">
          <ListGroup>
            <ListGroupItem active>
              {project.name}
              <Button
                color="success"
                onClick={() => openRegisterMinutesWorked(project.id)}
              >
                Registrar trabalho
              </Button>
              <Button color="success" onClick={() => openProjectDetails(index)}>
                Detalhes
              </Button>
            </ListGroupItem>
          </ListGroup>
          <Modal isOpen={modal}>
            <ModalHeader toggle={() => openProjectDetails()}>
              Registro de minutos trabalhados
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
                  {projectOpenInModal.map(data => (
                    <tr key={data.id}>
                      <td>{data.date}</td>
                      <td>{data.minutes_worked}</td>
                      <td>{data.user.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ModalBody>
          </Modal>
        </div>
      ))}

      <Modal isOpen={modalRegisterMinutesWorked}>
        <ModalHeader toggle={() => openRegisterMinutesWorked()}>
          Registro de minutos trabalhados
        </ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input onChange={e => setInputMinutes(e.target.value)} />
          </InputGroup>
          <Button color="success" onClick={() => handleSavedMinutesWorked()}>
            Salvar
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}
