import { useEffect, useState } from 'react';
import style from './Modal.module.css';

const defaultProps = { information: undefined };

const Modal = ({
  open,
  title,
  information,
  handleClose,
}: {
  open: boolean;
  title: string;
  information?: string;
  handleClose: () => void;
}) => {
  const [openModal, setOpenModal] = useState(open);
  const closeModal = () => {
    setOpenModal(false);
    handleClose();
  };
  const handleClickClose = () => closeModal();

  const handleClickOutside = (e: any) =>
    e.target.id === 'modal' && closeModal();

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <div
      id="modal"
      className={`${style.modal} ${openModal && style.modalOpen}`}
      onClick={handleClickOutside}
      onKeyDown={handleClickOutside}
      role="button"
      tabIndex={0}
    >
      <div className={style.modalContent}>
        <button
          type="button"
          className={style.close}
          onClick={handleClickClose}
        >
          &times;
        </button>
        <div className={style.text}>
          <h2 className={style.title}>{title}</h2>
          {information ?? <p>{information}</p>}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
