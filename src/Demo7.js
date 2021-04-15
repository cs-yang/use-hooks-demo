import React, {useRef, useState, useCallback, useEffect} from 'react';

const Demo7 = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    //以下方式写相当于没加useCallback
   /* const handleClick = useCallback(() => {
        // 无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变
        const _count = count + 1;
        ref.current = _count;
        setCount(_count);
    }, [count]);*/

   //这种才是正确的方式，保证依赖函数为空数组
    const handleClick = useCallback(() => {
        // 无论state是否使用都会重新渲染 有ref地方也有state改变可以使ref的渲染结果改变
        setCount(c => {
            const _count = c + 1;
            ref.current = _count;
            return _count;
        })
    }, []);

    useEffect(() => {
        console.log('我执行了');
    }, [handleClick]);
    console.log('count', count);
    console.log('demo7')
    return <div style={{ textAlign: 'center'}}>
        <h1>useCallback和不使用useCallback的区别</h1>
        <h3>这种方式会执行渲染一次</h3>
        <p>ref: {ref.current}  count: {count}</p>
        <button onClick={handleClick}>点击</button>
    </div>
};

export default Demo7;