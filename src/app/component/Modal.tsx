// components/ModalComponent.js

const ModalComponent = ({ isOpen, closeModal, onConfirm }:any) => {
    return (
      <>
        {isOpen && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Delete</h3>
              <p className="py-4">Are you sure you want to delete this item?</p>
              <div className="modal-action">
                <button className="btn" onClick={closeModal}>Cancel</button>
                <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
              </div>
            </div>
          </dialog>
        )}
      </>
    );
  };
  
  export default ModalComponent;
  