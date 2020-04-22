import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("renders without error :(", () => {
    render(<App state={{ todos: [{ id: 1, name: "test" }] }} />);
});
