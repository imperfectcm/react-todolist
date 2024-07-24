import { render, screen } from "@testing-library/react"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"

jest.mock('./components/TodoItem')

describe("TodoList", () => {

    // beforeEach(() => {
    //     (TodoItem as jest.Mock).mockReturnValue(<div>Mock todo item</div>);
    // })

    // it("should contains all todo items", () => {
    //     const items = ["Buy Banana", "But Apple", "Buy Milk"];

    //     render(<TodoList items={items} />);
    //     const todoitems = screen.getAllByText(/Mock todo item/);
    //     expect(todoitems.length).toEqual(items.length);
    // })

    // it("should render no item", () => {
    //     const items: String[] = [];

    //     render(<TodoList items={items} />);
    //     const elements = screen.queryAllByText(/No todo item./);
    //     expect(elements).not.toBeUndefined;
    // })

})