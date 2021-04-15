import React, { useRef, useState, useEffect } from 'react';

const Demo3 = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // 无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变
        setCount(c => c + 1);
    };
    useEffect(() => {
        ref.current = count;
    }, [count]);

    console.log('count', count);
    console.log('demo3')
    return <div style={{ textAlign: 'center'}}>
        <h1>useRef的值如果用于useEffect, useLayoutEffect，拿到的是旧值</h1>
        <h3>先渲染在执行</h3>
        <p>ref: {ref.current}  count: {count}</p>
        <button onClick={handleClick}>点击</button>
    </div>
};

export default Demo3;