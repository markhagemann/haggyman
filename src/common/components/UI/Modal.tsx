import React from 'react';

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

const Modal: React.SFC<ModalProps> = props => {
  const { children } = props;
  let modalClass = 'modal';
  if (props.isActive) {
    modalClass = 'modal is-active is-clipped';
  }
  return (
    <div className={modalClass}>
      <div className="modal-background" />
      <div className="modal-content">{children}</div>
      <button onClick={() => props.onClose()} className="modal-close" aria-label="close" />
    </div>
  );
};

export default Modal;
