import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex border border-purple-300 bg-slate-50 rounded-md p-10">
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 txt-xl font-semibold text-white"
        >
          Decrement
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>

        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 txt-xl font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 txt-xl font-semibold text-white"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
