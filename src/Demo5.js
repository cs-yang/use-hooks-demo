import React, { useRef, useState, useEffect } from 'react';

const Demo5 = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    const [isChange, setIsChange] = useState(0);
    const handleClick = () => {
        // 无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变
        setCount(c => c + 1);
    };

    //以下方式会执行渲染两次
    useEffect(() => {
        ref.current = count;
        setIsChange(c => ~c);
    }, [count]);

    console.log('count', count);
    console.log('demo5')
    return <div style={{ textAlign: 'center'}}>
        <h1>如果使ref的值保持和state值一致需要借助state改变</h1>
        <h3>这种方式会执行渲染两次</h3>
        <p>ref: {ref.current}  count: {count}</p>
        <button onClick={handleClick}>点击</button>
    </div>
};

export default Demo5;