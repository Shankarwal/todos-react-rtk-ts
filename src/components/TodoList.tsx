import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectFilteredTodosByIds, sortTodos } from "../app/features/TodoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoIds = useAppSelector(selectFilteredTodosByIds)!;
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortTodos(e.target.value));
  };

  return (
    <>
      {todoIds.length > 0 ? (
        <div className="todos">
          <label>
            Sort by
            <select className="todo-sort" id="sortby" onChange={handleChange}>
              <option value="oldest" id="oldest">
                Oldest
              </option>
              <option value="latest" id="latest">
                Latest
              </option>
            </select>
          </label>
          <ul className="todo-list">
            {todoIds.map((id) => (
              <TodoItem key={id} id={id} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
