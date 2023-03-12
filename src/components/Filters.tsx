import { useAppDispatch, useAppSelector } from "../app/hooks";
import { StatusFilters, setFilter } from "../app/features/FilterSlice";
import { clearDone } from "../app/features/TodoSlice";

const Filters = () => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.filter);
  const filterButtons = Object.keys(StatusFilters).map((status) => {
    const value = StatusFilters[status];
    return (
      <button
        key={value}
        className={value === activeFilter ? "btn active" : "btn"}
        onClick={() => dispatch(setFilter(value))}
      >
        {status}
      </button>
    );
  });
  return (
    <>
      {filterButtons}
      <button className="btn" onClick={() => dispatch(clearDone())}>
        Clear done
      </button>
    </>
  );
};

export default Filters;
