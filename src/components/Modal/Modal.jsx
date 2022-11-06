import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ url, alt, onCloseModal }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = e => {
    if (e.code === 'Escape') {
      return onCloseModal();
    }
    if (e.target !== e.currentTarget) {
      return onCloseModal();
    }
  };
  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalOverlay>
        <img src={url} alt={alt} />
      </ModalOverlay>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
