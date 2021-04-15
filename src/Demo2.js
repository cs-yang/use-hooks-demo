import React, { useRef, useState } from 'react';

const Demo2 = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        ref.current = 1 + ref.current;
        // 无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变
        setCount(c => c + 1);
    };
    console.log('demo2')
    return <div style={{ textAlign: 'center'}}>
        <h1>使useRef的最新值用于可渲染必须有state改变</h1>
        <h3>无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变</h3>
        <p>{ref.current}</p>
        <button onClick={handleClick}>点击</button>
    </div>
};


export default Demo2;