import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Icons from '../../../images/symbol-defs.svg';
import s from './StartModal.module.css';

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
          <ul>
            <li className={s.firstStepWrapper}>
              <h3 className={s.firstTitle}>{t('modal.step')}1.</h3>
              <div className={s.firstTitleWrapper}>
                <svg className={s.firstStepIcon} width="22px" height="17px">
                  <use href={`${Icons}#icon-flat-grey`} />
                </svg>

                <p className={s.firstStep}>{t('modal.createLibrary')}</p>

                <svg className={s.firstStepIconDesc} width="10px" height="12px">
                  <use href={`${Icons}#icon-Vector`} />
                </svg>
                <p className={s.firstDesc}>{t('modal.addBooks')}</p>
              </div>
            </li>
            <li className={s.stepWrapper}>
              <h3 className={s.secondTitle}>{t('modal.step')}2.</h3>
              <svg className={s.secondStepIcon} width="22px" height="17px">
                <use href={`${Icons}#icon-flag`} />
              </svg>
              <p className={s.secondStep}>{t('modal.createTraining')}</p>
              <svg className={s.secondStepIconDesc} width="10px" height="12px">
                <use href={`${Icons}#icon-Vector`} />
              </svg>
              <p className={s.secondStepDesc}>{t('modal.setAGoal')}</p>
            </li>
          </ul>

          <button
            onClick={handleClose}
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
