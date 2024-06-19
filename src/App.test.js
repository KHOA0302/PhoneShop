import { render, screen } from "@testing-library/react";
import App from "./App";
import Test from "./Pages/Test";

test("CI/CD should be worked", () => {
  render(<Test />);
  const linkElement = screen.getByText("CI/CD");
  expect(linkElement).toBeInTheDocument();
});
