import React from 'react';
import Modal from 'react-modal';

import './Modal.scss';

const MyModal = ({ isOpen, closeModal, contentLabel }) => {
  return (
    <Modal className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
    >
      <div>
        <div className='modal-horario'><h1>00 : 00</h1></div>
        

        <label htmlFor="">Medicação</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Observações</label>
        <input type="text" name="" id="" />

        <label htmlFor="">PCD: Audição</label>
        <input type="checkbox" name="" id="" />

        <label htmlFor="">PCD: Visão</label>
        <input type="checkbox" name="" id="" />
        
        <div>
            <button className='btn-modal' onClick={closeModal}>SALVAR</button>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;