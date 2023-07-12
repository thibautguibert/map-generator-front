import { fireEvent, render, screen } from "@testing-library/react";

import CheckboxGroup from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  test("checks and unchecks checkboxes and calls onChange with correct values", () => {
    const options = ["option1", "option2", "option3"];
    const value = ["option1"];
    const onChange = jest.fn();
    render(<CheckboxGroup options={options} value={value} onChange={onChange} />);

    expect(screen.getByLabelText("option1")).toBeChecked();
    fireEvent.click(screen.getByLabelText("option1"));
    expect(onChange).toHaveBeenCalledWith([]);

    fireEvent.click(screen.getByLabelText("option2"));
    expect(onChange).toHaveBeenCalledWith(["option2"]);
  });
});
