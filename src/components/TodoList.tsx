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
        const newitemList = [...itemList, input];
        setItemList(newitemList);
        setInput("");
    }

    const removeItem = (itemToRemove: String) => {
        const newItemList = itemList.filter(item => item !== itemToRemove)
        setItemList(newItemList);
    }

    return (
        <article className="todo-box">
            <div className="todo-table">
                <h2>Todo List</h2>
                <p>By CM</p>
                <div className="todo-input-area">
                    <input className="todo-input" type="text" placeholder="Todo content"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        value={input + ""}
                    />
                    <button className="todo-input-btn" onClick={addItem}>Add</button>
                </div>
                {itemList.map((item, index) => (
                    <TodoItem key={index} item={item} onRemove={() =>
                        removeItem(item)
                    } />
                ))}
            </div>
        </article>
    )
}