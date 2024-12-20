import { useCounterStore } from "../stores/counterStore";

function Count() {
  const count = useCounterStore((state) => state.count);
  const { decrement, increment, resetNum } = useCounterStore(
    (state) => state.actions
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={decrement}>Decrease</button>
        <button onClick={increment}>Increase</button>
        <button onClick={resetNum}>Zero</button>
      </div>
    </div>
  );
}

export default Count;
