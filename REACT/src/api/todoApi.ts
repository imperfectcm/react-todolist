import { useQuery } from "@tanstack/react-query";
import { IRootState } from "../store2";
import { useSelector } from "react-redux";

interface TodoItemType {
    id: number;
    content: String;
    username: String;
    count: number;
    deleted: String;
    created_at: String;
    updated_at: String;
}

export function useGetTodoItems() {
    let username: String = useSelector((state: IRootState) => state.auth.username)

    const { isLoading, isFetching, error, data
    } = useQuery({
        queryKey: ["todoItemsDB"],
        queryFn: async () => {
            let res = await fetch(`${process.env.REACT_APP_API_SERVER}/todo?username=${username}`)
            let result = await res.json();
            return result.data as TodoItemType[];
        }
    });

    if (isLoading || isFetching || error || !data) return [];

    return data;
}


export async function addTodoItem(username: String, content: String) {
    // let username: String = useSelector((state: IRootState) => state.auth.username)

    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/todo`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ username, content })
    })

    const result = await res.json()
    return result.message;
}

export async function removeTodoItem(id: number) {

    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/todo`, {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ id })
    })

    const result = await res.json()
    return result.message;
}

export async function addTodoItemCount(id: number) {

    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/todo/count`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ id })
    })

    const result = await res.json()
    return result.data;
}