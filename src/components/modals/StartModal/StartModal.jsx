import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './StartModal.module.css';
import Icons from '../../../images/symbol-defs.svg';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function StartModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

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
            <p className={s.firstTitle}>{t('modal.step')}1.</p>
            <svg className={s.firstStepIcon} width="22px" height="17px">
              <use href={`${Icons}#icon-flat-grey`} />
            </svg>
            <p className={s.firstStep}>{t('modal.createLibrary')}</p>
            <svg className={s.firstStepIconDesc} width="10px" height="12px">
              <use href={`${Icons}#icon-Vector`} />
            </svg>
            <p className={s.firstDesc}>{t('modal.addBooks')}</p>
          </div>
          <div className={s.stepWrapper}>
            <p className={s.secondTitle}>{t('modal.step')}2.</p>
            <svg className={s.secondStepIcon} width="22px" height="17px">
              <use href={`${Icons}#icon-flag`} />
            </svg>
            <p className={s.secondStep}>{t('modal.createTraining')}</p>
            <svg className={s.secondStepIconDesc} width="10px" height="12px">
              <use href={`${Icons}#icon-Vector`} />
            </svg>
            <p className={s.secondStepDesc}>{t('modal.setAGoal')}</p>
          </div>


          <button
            onClose={handleClose}
            className={s.okBtn}
            tabIndex={0}
            autoFocus={true}
          >
            {t('modal.ok')}
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
