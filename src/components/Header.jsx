import { AiOutlineHome } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const Header = ({ todos, handleClearTodos }) => {
  const handleClear = () => {
    if (!confirm("Are you sure to clear the tasks")) return;
    handleClearTodos();
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-title">
          <AiOutlineHome />
          <h1>Your tasks</h1>
        </div>

        <div className="header-opt">
          <div className="number-of-tasks">
            <p>{todos.length}</p>
          </div>
          <button onClick={handleClear}>
            <FaTrashAlt /> Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
