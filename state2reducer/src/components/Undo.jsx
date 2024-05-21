// https://juejin.cn/post/7026200480313245732
import {useState, useRef} from 'react';

export default function Chat(){
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const timeoutRef = useRef(null);  // 这里保存在 ref 中

    // let timeoutID = null;

    function handleSend(){
        setIsSending(true);
        timeoutRef.current = setTimeout(()=>{
            alert('sent!');
            setIsSending(false);
        },3000)
    }

    function handleUndo(){
        setIsSending(false);
        clearTimeout(timeoutRef.current);
    }

    return(
        <>
            <input disabled={isSending} value ={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <button disabled={isSending} onClick={handleSend}>{isSending ? 'Sending...' : 'Send'}</button>
            {isSending && <button onClick={handleUndo}>Undo</button>}
        </>
    );
}
