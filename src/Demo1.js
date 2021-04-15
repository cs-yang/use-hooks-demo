import React, { useRef } from 'react';

const Demo1 = () => {
    const ref = useRef(0);

    const handleClick = () => {
        // ref 虽然没有在渲染中改变，但由于保持引用,的确改变了
        ref.current = ref.current + 1;
    };
    console.log('demo1')
    return <div style={{ textAlign: 'center'}}>
        <h1>useRef不会造成重新渲染</h1>
        <p>{ref.current}</p>
        <button onClick={handleClick}>点击</button>
    </div>
};

export default Demo1;