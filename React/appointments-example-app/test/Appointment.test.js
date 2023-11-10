import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
// `Appointment` is not the default export, which is intentional
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  let container;
  beforeEach(() => {
    container = container = document.createElement("div");
  });

  const render = (component) => {
    document.body.replaceChildren(container);
    act(() => ReactDOM.createRoot(container).render(component));
  };

  it("renders the customer first name", () => {
    const customer = {
      firstName: "Ashley",
    };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another customer first name", () => {
    const customer = {
      firstName: "Jordan",
    };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Jordan");
  });
});
