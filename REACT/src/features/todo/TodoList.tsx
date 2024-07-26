import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store2";
import { AppDispatcher } from "../../store2";
import { add_item, complete_item, remove_item } from "./todoSlice";
import { addTodoItem, useGetTodoItems } from "../../api/todoApi";

export function TodoList() {
    let todoItems: Array<{ id: number, content: String, count: number }> = useSelector((state: IRootState) => state.todo.todoItems)
    let username: String = useSelector((state: IRootState) => state.auth.username)
    //     state, state updater
    const [input, setInput] = useState("");

    // ========== from local ==========
    const dispatch = useDispatch<AppDispatcher>()

    const addItem = (username: String, input: String) => {
        if (input.trim() === "") return;
        addTodoItem(username, input);
        setInput("");
    }

    const enterAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItem(username, input);
        }
    }

    const completeItem = (id: number) => {
        dispatch(complete_item(id));
    }

    const removeItem = (id: number) => {
        dispatch(remove_item(id));
    }


    // ========== from database ==========
    const todoItemsData = useGetTodoItems(username);

    return (
        <article className="todo-box">
            <div className="todo-table">
                <h2>Todo List</h2>
                <p>User : {username}</p>
                <div className="todo-input-area">
                    <input className="todo-input" type="text" placeholder="Todo content"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        value={input}
                        onKeyDown={(e) => enterAddItem(e)}
                    />
                    <button className="todo-input-btn btn" onClick={() => { addItem(username, input) }}>Add</button>
                </div>
                {todoItemsData?.length ?
                    todoItemsData.map((item) => (
                        <TodoItem key={item.id}
                            id={item.id}
                            content={item.content}
                            count={item.count}
                            onComplete={() => { }}
                            onRemove={() => { }}
                        />
                    )) :
                    todoItems.map((entry) => (
                        <TodoItem key={entry.id}
                            id={entry.id}
                            content={entry.content}
                            count={entry.count}
                            onComplete={() => completeItem(entry.id)}
                            onRemove={() => removeItem(entry.id)}
                        />
                    ))}
            </div>
        </article>
    )
}