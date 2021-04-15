import React, { useRef, useState, useMemo } from 'react';

const Demo6 = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // 无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变
        const _count = count + 1;
        ref.current = _count;
        setCount(_count);
    };

    useMemo(() => {
        console.log('我执行了');
    }, [handleClick]);

    console.log('count', count);
    console.log('demo6')
    return <div style={{ textAlign: 'center'}}>
        <h1>使ref的值保持和state值一致,减少渲染方式</h1>
        <h3>这种方式会执行渲染一次</h3>
        <p>ref: {ref.current}  count: {count}</p>
        <button onClick={handleClick}>点击</button>
    </div>
};

export default Demo6;