import { useState } from "react";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    items: String[];
}

export function TodoList(props: TodoListProps) {
    //     state   , state updater
    const [itemList, setItemList] = useState<String[]>(props.items);

    const [input, setInput] = useState<String>("");

    const addItem = () => {
        setItemList([...itemList, input]);
        setInput("");
    }

    const removeItem = (itemToRemove: String) => {
        const newItemList = itemList.filter(item => item !== itemToRemove)
        setItemList(newItemList);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <p>By CM</p>
            <input type="text" placeholder="Todo content"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                value={input + ""}
            />
            <button onClick={addItem}>Add</button>
            {itemList.map((item, index) => (
                <TodoItem key={index} item={item} onRemove={() =>
                    removeItem(item)
                } />
            ))}
        </div>
    )
}