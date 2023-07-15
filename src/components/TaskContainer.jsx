import { PiTrashBold } from "react-icons//pi";
import { FaRegTimesCircle } from "react-icons/fa";

const TaskContainer = ({ todos, handleUpdate, handleDelete }) => {
  const handleChange = (e) => {
    let targetId = e.target.parentElement.parentElement.id;
    let oldTodos = [...todos];
    let updateItem = oldTodos.filter((item) => item.id === targetId)[0];
    updateItem = { ...updateItem, isPending: !updateItem.isPending };
    handleUpdate(updateItem);
  };

  const handleDeleteItem = (e) => {
    let targetId = e.target.parentElement.parentElement.id;
    if (confirm("Are you sure you want to delete?")) handleDelete(targetId);
  };

  return (
    <div className="task-container">
      <div className="div container">
        <div className="task-content">
          <div className="pending-task">
            {todos.length > 0 ? (
              <ul>
                {todos
                  .filter((item) => item.isPending)
                  .map((item) => (
                    <li key={item.id} id={item.id}>
                      <div className="left">
                        <input
                          onChange={handleChange}
                          type="checkbox"
                          checked={!item.isPending}
                        />
                        <span>{item.title}</span>
                      </div>
                      <div className="right">
                        <button onClick={handleDeleteItem}>
                          <PiTrashBold />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            ) : (
              <div className="empty-box">
                <div className="empty-icon">
                  <FaRegTimesCircle />
                </div>
                <h3>No tasks to show</h3>
              </div>
            )}
          </div>

          <div className="completed-tasks">
            {todos.filter((item) => !item.isPending).length > 0 && (
              <p>Completed</p>
            )}
            <ul>
              {todos
                .filter((item) => !item.isPending)
                .map((item) => (
                  <li key={item.id} id={item.id}>
                    <div className="left">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        checked={!item.isPending}
                      />
                      <span>{item.title}</span>
                    </div>
                    <div className="right">
                      <button onClick={handleDeleteItem}>
                        <PiTrashBold />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
