import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import {
  AnimationType,
  OutAnimationType,
  PopupProvider,
  usePopup
} from "react-custom-popup";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detalii Pacient
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
          <div>Nume: {props.data.first_name}</div>
          <div>Prenume: {props.data.last_name}</div>
          <div>Email: {props.data.email}</div>
          <div>Gen: {props.data.gender}</div>
          <div>Codul dignosticului: {props.data.diagnosis_code}</div>
          <div>Detalii despre diagnostic: {props.data.diagnosis_description}</div>
          <div>{props.data.diagnosis_description_detailed}</div>
          <div>Tratament medicamentos administrat: {props.data.administered_drug_treatment}</div>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyButton(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
  <>
    <button
      onClick={() => setModalShow(true)}
    >
      Afiseaza Detalii
    </button>
    <MyVerticallyCenteredModal
      data={props.data}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  );
}

function App() {
  const [patients, setData] = useState([]);
    
  const getPatients = async () => {
      try {
       const response = await fetch('https://alexgr.ro/ehealth/patients.json');
       const json = await response.json();
       setData(json);
     } catch (error) {
       console.error(error);
     } finally {
     }
  }
     
  useEffect(() => {
      getPatients();
  }, []);

  return (
    <>
    {/* <div> */}
      <body className="App-header">
        <table id='data'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nume</th>
              <th>Prenume</th>
              <th>Actiune</th>
            </tr>
          </thead>
          <tbody>
            {
              patients.map( elem => {
                // console.log(elem)
                return (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.first_name}</td>
                    <td>{elem.last_name}</td>
                    <td>
                        <MyButton data={elem}></MyButton>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </body>
    {/* </div> */}
    </>
  );
}

export default App;
