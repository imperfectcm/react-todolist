import { useSelector } from "react-redux";
import { IRootState } from "../../store2"
import { TodoList } from "../todo/TodoList";
import { Login } from "../auth/Login";

export function Home() {
    let isUser = useSelector((state: IRootState) => state.auth.username);
    return (
        <div>
            {isUser ? <TodoList /> : <Login />}
        </div>
    )
}