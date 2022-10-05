import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './StartModal.module.css';
import Icons from '../../../images/symbol-defs.svg';
import PropTypes from 'prop-types';

function StartModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={s.buttonWrapper}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClose={handleClose} className={s.modal}>
          <div className={s.firstStepWrapper}>
            <p className={s.firstTitle}>Step1.</p>
            <svg className={s.firstStepIcon} width="22px" height="17px">
              <use href={`${Icons}#icon-flat-grey`} />
            </svg>
            <p className={s.firstStep}>Create your own library</p>
            <svg className={s.firstStepIconDesc} width="10px" height="12px">
              <use href={`${Icons}#icon-Vector`} />
            </svg>
            <p className={s.firstDesc}>
              Add there books which you are going to read
            </p>
          </div>
          <div className={s.stepWrapper}>
            <p className={s.secondTitle}>Step2.</p>
            <svg className={s.secondStepIcon} width="22px" height="17px">
              <use href={`${Icons}#icon-flag`} />
            </svg>
            <p className={s.secondStep}>Create your first training</p>
            <svg className={s.secondStepIconDesc} width="10px" height="12px">
              <use href={`${Icons}#icon-Vector`} />
            </svg>
            <p className={s.secondStepDesc}>
              Set a goal, choose period, start training
            </p>
          </div>

          <button
            onClose={handleClose}
            className={s.okBtn}
            tabIndex={0}
            autoFocus={true}
          >
            Ok
          </button>
        </Box>
      </Modal>
    </div>
  );
}

StartModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default StartModal;
