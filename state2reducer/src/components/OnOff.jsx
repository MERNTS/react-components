// https://juejin.cn/post/7026944951170629669/

import {useRef, useState} from 'react';

export default function Toggle(){
    const isOnRef = useRef(false);

    return(
        <button onClick={() => isOnRef.current = !isOnRef.current}>{isOnRef.current ? 'On' : 'Off'}</button>
    )
}