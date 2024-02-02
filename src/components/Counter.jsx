import { useReducer } from "react";

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleDecrease=()=> {
    dispatch({type:"DECREMENT"})
  }
  const handleIncrease=()=> {
    dispatch({type:"INCREMENT"})
  }

  return (
    <div className="p-20">
      <p className="text-4xl font-medium mb-5">Count: {state.count}</p>
      <div className="flex items-center gap-5">
        <button onClick={handleDecrease} className="px-5 py-2.5 bg-rose-600 text-white rounded-xl text-xl active:bg-black">
          Decrease by 1
        </button>
        <button onClick={handleIncrease} className="px-5 py-2.5 bg-rose-600 text-white rounded-xl text-xl active:bg-black">
          Increase by 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
