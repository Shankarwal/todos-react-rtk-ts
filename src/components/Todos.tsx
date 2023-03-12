import Input from "./Input";
import Filters from "./Filters";
import TodoList from "./TodoList";

const Todos = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="main">
      <div className="container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <Input />
          <div className="filters">
            <Filters />
          </div>
        </form>
        <TodoList />
      </div>
    </main>
  );
};

export default Todos;
