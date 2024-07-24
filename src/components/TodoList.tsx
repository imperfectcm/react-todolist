import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store2";
import { AppDispatcher } from "../store2";
import { add_item } from "../slices/todoSlice";

// interface TodoListProps {
//     items: String[];
// }

export function TodoList() {
    const todoItems: Array<{ id: number, name: String, count: number }> = useSelector((state: IRootState) => state.todo.todoItems)
    //     state, state updater
    const [input, setInput] = useState("");

    const dispatch = useDispatch<AppDispatcher>()

    const addItem = () => {
        if (input.trim() !== "") {
            dispatch(add_item(input));
            setInput("");
        }
    }

    const enterAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItem();
        }
    }

    // const removeItem = (itemToRemove: String) => {
    //     const newItemList = itemList.filter(item => item !== itemToRemove)
    //     setItemList(newItemList);
    // }

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
                        value={input}
                        onKeyDown={(e) => enterAddItem(e)}
                    />
                    <button className="todo-input-btn btn" onClick={addItem}>Add</button>
                </div>
                {todoItems.map((entry) => (
                    <TodoItem key={entry.id} id={entry.id} name={entry.name} count={entry.count}
                    // onRemove={() => removeItem(entry)} 
                    />
                ))}
            </div>
        </article>
    )
}