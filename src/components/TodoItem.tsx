import { useState } from "react";

interface TodoItemProps {
    item: String;
    onRemove: () => void; // function to remove the item from the list.  // (e) => { setItemList(itemList.filter(i => i!==props.item)) }  // OR props.onRemove()
}

export function TodoItem(props: { id: number, name: String, count: number }) {

    const [count, setCount] = useState<number>(0);
    // const onComplete = () => {
    //     setCount(count => count + 1);
    // }

    return (
        <div className="item-list">
            {/* <button className="item-btn" onClick={onComplete}>Complete</button>
            <button className="item-btn remove-btn" onClick={props.onRemove}>Remove</button> */}
            <span className="item-content">
                <span>{props.id}. {props.name}</span>
                <span>( {props.count} )</span>
            </span>
        </div>
    )
}