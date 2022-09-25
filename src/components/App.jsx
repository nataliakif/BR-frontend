import Header from './Header/Header';
import DoingFineModal from './modals/DoingFineModal/DoingFineModal';
import { useState } from 'react';

export const App = () => {
  const [doingFineModal, setDoingFineModal] = useState(false);

  const closeDoingFineModal = async () => {
    setDoingFineModal(false);
  };
  const onClick = async values => {
    setDoingFineModal(true);
  };
  return (
    <>
      <Header />
      <button type="button" onClick={onClick}>
        Modal
      </button>
      {doingFineModal && (
        <DoingFineModal open={DoingFineModal} onClose={closeDoingFineModal} />
      )}
    </>
  );
};
