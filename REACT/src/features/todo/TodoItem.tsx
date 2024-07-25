import { useState } from "react";

interface TodoItemProps {
    id: number;
    name: String;
    count: number;
    onComplete: () => void;
    onRemove: () => void; // function to remove the item from the list.  // (e) => { setItemList(itemList.filter(i => i!==props.item)) }  // OR props.onRemove()
}

export function TodoItem(props: TodoItemProps) {

    // const [count, setCount] = useState<number>(0);

    return (
        <div className="item-list">
            <button className="item-btn" onClick={props.onComplete}>Complete</button>
            <button className="item-btn remove-btn" onClick={props.onRemove}>Remove</button>
            <span className="item-content">
                <span>{props.id}. {props.name}</span>
                <span>( {props.count} )</span>
            </span>
        </div>
    )
}