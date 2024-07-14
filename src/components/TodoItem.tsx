import { useState } from "react";

interface TodoItemProps {
    item: String;
}

export function TodoItem (props: TodoItemProps) {

    const [count, setCount] = useState<number>(0);
    const onComplete = () => {
        setCount(count + 1);
    } 

    return (
        <div>
            <button onClick={onComplete}>Complete</button>
            <span>{props.item}</span>
            <span>( {count} )</span>
        </div>
    )
}