import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  toggleTodo,
  deleteTodo,
  selectTodoById,
} from "../app/features/TodoSlice";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  id: string;
};

const TodoItem = ({ id }: Props) => {
  const todo = useAppSelector((state) => selectTodoById(state, id))!;
  const dispatch = useAppDispatch();
  const { text, completed } = todo;

  const handleChange = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="list-item">
      <div className="todo-desc">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleChange}
          checked={completed}
        />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
      </div>
      <span className="close" onClick={handleDelete}>
        <AiOutlineDelete />
      </span>
    </li>
  );
};

export default TodoItem;
