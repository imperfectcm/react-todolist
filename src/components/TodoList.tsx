import { useState } from "react";
import { TodoItem } from "./TodoItem";


export function TodoList() {
    const [itemList, setItemList] = useState<String[]>([
        "Buy Banana",
        "Buy Milk",
        "Buy Cherry"
    ]);

    return (
        <div>
            <h2>Todo List</h2>
            <p>By CM</p>
            <input type="text" placeholder="Todo content" />
            <button>Add</button>
            {itemList.map(item => (
                <TodoItem item={item} />
            ))}
        </div>
    )
}