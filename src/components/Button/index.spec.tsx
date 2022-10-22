import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button, { Props } from "./index";

const props: Props = {
  action: "next",
  btnClass: "btn",
  text: "NEXT",
  onClick: jest.fn(),
};
describe("Button", () => {
  it("should render text", () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText(props.text)).toBeInTheDocument();
  });

  it("should add the btn class", () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText(props.text).classList).toContain(props.btnClass);
  });

  it("should trigger the registered event", () => {
    const { getByText } = render(<Button {...props} text="PREV" />);
    fireEvent.click(getByText("PREV"));
    expect(props.onClick).toHaveBeenCalled();
  });
});
