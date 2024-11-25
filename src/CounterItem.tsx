interface CounterItemProps {
  id: number;
  toggle?: boolean;
  toggleCallback: (id: number, toggle: boolean) => void;
  next?: number;
}

function CounterItem({ id, toggle, toggleCallback, next }: CounterItemProps) {
  return (
    <div
      className={`counter-item ${toggle ? "selected" : ""} ${next === id ? "next" : ""}`}
      onClick={() => toggleCallback(id, !toggle)}
    >
      {id + 1}
    </div>
  );
}

export default CounterItem;