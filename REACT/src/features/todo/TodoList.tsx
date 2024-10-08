import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store2";
import { AppDispatcher } from "../../store2";
import { complete_item, remove_item } from "./todoSlice";
import { useGetTodoItems, addTodoItem, removeTodoItem, addTodoItemCount } from "../../api/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function TodoList() {
    let todoItems: Array<{ id: number, content: String, count: number }> = useSelector((state: IRootState) => state.todo.todoItems)
    let username: String = useSelector((state: IRootState) => state.auth.username)
    //     state, state updater
    const [input, setInput] = useState("");


    // ========== from local ==========
    const dispatch = useDispatch<AppDispatcher>()

    const completeItem = (id: number) => {
        dispatch(complete_item(id));
    }
    
    const removeItem = (id: number) => {
        dispatch(remove_item(id));
    }
    
    
    // ========== from database ==========
    const todoItemsData = useGetTodoItems();
    
    const queryClient = useQueryClient();

    // add items to database
    const onAddTodoItem = useMutation({
        mutationFn: async (data: { username: String, content: String }) => {
            return addTodoItem(data.username, data.content);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todoItemsDB"] })
    });

    const addItem = (username: String, input: String) => {
        if (input.trim() === "") return;
        onAddTodoItem.mutate({ username: username, content: input })
        setInput("");
    }

    const enterAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItem(username, input);
        }
    }

    // remove items from database
    const onRemoveTodoItem = useMutation({
        mutationFn: async (data: { id: number }) => {
            return removeTodoItem(data.id);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todoItemsDB"] })
    });

    const removeItemDB = (id: number) => {
        onRemoveTodoItem.mutate({ id: id });
    }

    // complete items in database (count + 1)
    const onAddTodoItemCount = useMutation({
        mutationFn: async (data: { id: number }) => {
            return addTodoItemCount(data.id);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todoItemsDB"] })
    });

    const completeItemDB = (id: number) => {
        onAddTodoItemCount.mutate({ id: id });
    }

    // display item sequence
    let itemNo = 0;

    // example wont show edit btn
    let isExample = false;

    todoItemsData?.length ? isExample = false : isExample = true;
    
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
                {todoItemsData == "Loading" ?
                <div className="loader-area"><div className="loader"></div></div>
                : 
                todoItemsData?.length ?
                    todoItemsData.map((item) => (
                        itemNo += 1,
                        <TodoItem key={item.id}
                            itemNo={itemNo}
                            id={item.id}
                            content={item.content}
                            count={item.count}
                            isExample={isExample}
                            onComplete={() => completeItemDB(item.id)}
                            onRemove={() => removeItemDB(item.id)}
                        />
                    ))
                    :
                    todoItems.map((entry) => (
                        itemNo += 1,
                        <TodoItem key={entry.id}
                            itemNo={itemNo}
                            id={entry.id}
                            content={entry.content}
                            count={entry.count}
                            isExample={isExample}
                            onComplete={() => completeItem(entry.id)}
                            onRemove={() => removeItem(entry.id)}
                        />
                    ))}
            </div>
        </article>
    )
}