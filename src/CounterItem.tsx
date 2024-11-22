interface CounterItemProps {
  id: number;
  toggle?: boolean;
  toggleCallback: (id: number, toggle: boolean) => void;
}

function CounterItem({ id, toggle, toggleCallback }: CounterItemProps) {
  return (
    <div
      className={`counter-item ${toggle ? "selected" : ""}`}
      onClick={() => toggleCallback(id, !toggle)}
    >
      {id + 1}
    </div>
  );
}

export default CounterItem;