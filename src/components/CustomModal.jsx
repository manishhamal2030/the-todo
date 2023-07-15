import { AiFillCloseCircle } from "react-icons/ri";

const CustomModal = () => {
  return (
    <div className="custom-modal">
      <div className="modal-content">
        <div className="modal-title">
          <h2>title</h2>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to action</p>
          <p>data</p>
        </div>
        <div className="modal-actions">
          <div className="yes">
            <button>Yes</button>
          </div>
          <div className="no">
            <button>Cancel</button>
          </div>
        </div>
        <div className="modal-close">
          <AiFillCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
