import { useReducer } from "react"

const App = () => {

  const initialState = {
    count:0,
    inc:2,
    dec:2,
  }

  const reducer = (state, action) => {
    console.log(state, action);

    // if (action.type === "INCREMENT") {
    //   if (state > 19) {
    //     return state = 20;
    //   }
    //   else {
    //     return state + 1;
    //   }
    // }
    // if (action.type === "DECREMENT") {
    //   if (state < 2) {
    //     return state = 1;
    //   }
    //   else {
    //     return state - 1;
    //   }
    // }

    // if(action.type === "RESET"){
    //   return state = 0;
    // }


    switch(action.type){
      case "INCREMENT":
        return {...state , count:state.count + 1};
      case "DECREMENT":
        return {...state , count:state.count - 1};
      case "RESET":
        return {...state , count:0};
      default:
        return state;
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div className="h-screen bg-gray-900 flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-white font-semibold">Counter App Using UseReducer Hook</h1>
        <button className="px-4 py-2 text-xl font-semibold text-gray-50 bg-green-600 rounded-md cursor-pointer ring-2"
          onClick={() => { dispatch({ type: "INCREMENT" }) }}
        >Increment</button>
        <button className="px-4 py-2 text-xl font-semibold text-gray-50 bg-red-600 rounded-md cursor-pointer ring-2"
          onClick={() => { dispatch({ type: "DECREMENT" }) }}
        >Decrement</button>
        <button className="px-4 py-2 text-xl font-semibold text-gray-50 bg-blue-600 rounded-md cursor-pointer ring-2"
          onClick={() => { dispatch({ type: "RESET" }) }}
        >Reset</button>
        <h2 className="text-white text-center text-3xl font-semibold">Counter : {state.count}</h2>
      </div>
    </div>
  )
}

export default App