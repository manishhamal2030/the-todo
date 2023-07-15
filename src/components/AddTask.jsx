import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTask = ({ todos, handleAddTodos }) => {
  const [data, setData] = useState("");
  const [todoObj, setTodoObj] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setData("");

    if (data == "") {
      alert("fill out the field");
      return;
    }

    let findData = todos.filter((item) => item.title == data);

    if (findData.length > 0) {
      alert("Item already exists");
      return;
    }

    let id = uuid();
    const dataObj = {
      id,
      title: data,
      isPending: true,
    };

    setTodoObj(dataObj);
    handleAddTodos(dataObj);
  };

  return (
    <div className="add-task">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setData(e.target.value)}
            value={data}
            type="text"
            name="text"
            placeholder="Enter your task...."
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
