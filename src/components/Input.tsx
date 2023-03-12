import { useAppDispatch } from "../app/hooks";
import { addTodo } from "../app/features/TodoSlice";
import { v4 as uuid } from "uuid";
import type { Todo } from "../app/Types";

const Input = () => {
  const dispatch = useAppDispatch();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value;
    const newTodo: Todo = {
      id: uuid(),
      text: val,
      completed: false,
      date: new Date().toISOString(),
    };
    if (e.key === "Enter") {
      if (val && val.trim().length > 0) {
        dispatch(addTodo(newTodo));
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  return (
    <>
      <input placeholder="Add todo" type="text" onKeyDown={handleEnter} />
    </>
  );
};

export default Input;
