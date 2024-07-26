import { useDispatch } from "react-redux"
import { AppDispatcher } from "../../store2"
import { useState } from "react";
import { add_username } from "./authSlice";


export function Login() {
    const dispatch = useDispatch<AppDispatcher>();

    const [input, setInput] = useState("");

    const addUsername = () => {
        if (input.trim() === "") return;
        dispatch(add_username({ username: input }))
        setInput("");
    }

    const enterAddUsername = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUsername();
        }
    }

    return (
        <article className="todo-box">
            <div className="login-box">
                <div className="username-input-area">
                    <h2>Please type your username to start</h2>
                    <br></br>
                    <input type="text"
                        className="username-input"
                        placeholder="type your username"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => enterAddUsername(e)}
                        value={input} />
                    <button className="username-btn btn" onClick={addUsername}>Enter</button>
                </div>
            </div>
        </article>
    )
}