# hook state

```tsx
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
}} >
{counter}
</button>
))
}

export const SubChild2 = () => {
const { counter } = useContext(CounterContext);

return <div>{counter}</div>;
};


step 1

```
