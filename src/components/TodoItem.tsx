import { useState } from "react";

interface TodoItemProps {
    item: String;
    onRemove: () => void; // function to remove the item from the list.  // (e) => { setItemList(itemList.filter(i => i!==props.item)) }  // OR props.onRemove()
}

export function TodoItem (props: TodoItemProps) {

    const [count, setCount] = useState<number>(0);
    const onComplete = () => {
        setCount(count + 1);
    } 

    return (
        <div>
            <button onClick={onComplete}>Complete</button>
            <button onClick={props.onRemove}>Remove</button>
            <span>{props.item}</span>
            <span>( {count} )</span>
        </div>
    )
}