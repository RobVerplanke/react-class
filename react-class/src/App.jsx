import { useState } from 'react';
import Counter from './Counter.jsx';
import Todo from './Todo.jsx';

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <Counter counter={counter} />
      <Todo
        callbackIncrement={incrementCounter}
        callbackDecrement={decrementCounter}
      />
    </>
  );
}
