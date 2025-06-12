import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);

export const CounterButtons = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};