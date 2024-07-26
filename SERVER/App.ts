import express from "express";
import { Request, Response } from "express";
import { TodoRouter } from "./Routers/TodoRouter";
import cors from "cors";

const app = express();
app.use(cors<Request>());

const PORT = 8080;

app.use("/todo", TodoRouter);

app.get("/hi", (req: Request, res: Response) => {
    res.send("hi");
});


app.listen(PORT, () => { console.log(`Listening at http://localhost:${PORT}/`)});