import { describe, expect, test } from "@jest/globals";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("verifying jest setup", () => {
  test("vanilla jest executes", () => {
    expect(1 + 1).toBe(2);
  });

  test("extended setup with React Testing Library executes", () => {
    render(<App />);
    expect(screen.queryByText("Vite + React")).not.toBeNull();
  });
});
