import { useCounterStore } from "../stores/counterStore";

function FakeCount() {
  const fakeCount = useCounterStore((state) => state.fakeCount);

  console.log("렌더링됨");
  return <div>{fakeCount}</div>;
}

export default FakeCount;
