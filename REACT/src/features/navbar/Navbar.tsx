import { useNavigate } from "react-router-dom"
import { IRootState } from "../../store2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatcher } from "../../store2";
import { clear_username } from "../auth/authSlice";
import { Outlet } from 'react-router-dom'

export function Navbar() {
    const navigate = useNavigate();
    let isUser = useSelector((state: IRootState) => state.auth.username);
    const disPatcher = useDispatch<AppDispatcher>();

    return (
        <section className="navbar">
            <h3 className="btn" onClick={() => {navigate("/")}}>Home</h3>
            <h3 className="btn" onClick={() => {navigate("/about")}}>About</h3>
            { isUser ? <h3 className="btn" onClick={() => disPatcher(clear_username())}>Quit</h3> : ""}
            <Outlet />
        </section>
    )
};