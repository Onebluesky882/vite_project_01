import { useState } from "react";
import { SVG } from "@/assets/svg/SVG";
export const rightMenuList = [
  { id: 0, name: "Noodles", slug: "/noodles", img: SVG.friedFood },
  { id: 1, name: "Meatball", slug: "/meatball", img: SVG.seafood },
  { id: 2, name: "Fried Foods", slug: "/friedfoods", img: SVG.friedFood },
  { id: 3, name: "Drinks", slug: "/drinks", img: SVG.friedFood },
];

import { createContext, useContext } from "react";

type CounterContextType = {
  counter?: number;
  setCounter?: React.Dispatch<React.SetStateAction<number>>;
};

const CounterContext = createContext<CounterContextType>({});

export const Parent = () => {
  const [counter, setCounter] = useState(1);
  const contextValue = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      <Child />
    </CounterContext.Provider>
  );
};

export const Child = () => {
  return (
    <div>
      <SubChild />
      <SubChild2 />
    </div>
  );
};

export const SubChild = () => {
  const context = useContext(CounterContext);
  // const counter = context.counter ?? 0
  // const setCounter = context.setCounter
  const { counter = 0, setCounter } = context;

  return (
    <button
      onChange={() => {
        setCounter?.(counter + 1);
      }}
    >
      {counter}
    </button>
  );
};

export const SubChild2 = () => {
  const { counter } = useContext(CounterContext);

  return <div>{counter}</div>;
};
