import { render, screen } from "@testing-library/react"
import { TodoItem } from "./components/TodoItem"


describe("TodoItem", () => {

    // let onRemove: jest.Mock

    // beforeEach(() => {
    //     onRemove = jest.fn(() => null);
    // })

    // it("should renders item text", () => {
    //     render(<TodoItem item={"Buy Apple"} onRemove={onRemove} />);
    //     const elements = screen.getByText("Buy Apple");
    //     expect(elements).toBeDefined();
    // })

    // it("should calls onRemove", () => {
    //     render(<TodoItem item={"Buy Apple"} onRemove={onRemove} />);
    //     const button = screen.getByText(/^Remove$/);
    //     button.click();
    //     expect(onRemove).toBeCalledTimes(1);
    // })

})