import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeekView, { Props } from "./index";
import { days } from "../../constants";

const props: Props = {
  daysOfTheWeek: days,
  weekDays: [
    { day: 16, isToday: false },
    { day: 17, isToday: false },
    { day: 18, isToday: false },
    { day: 19, isToday: false },
    { day: 20, isToday: false },
    { day: 21, isToday: false },
    { day: 22, isToday: true },
  ],
  selectedDateIndex: 6,
  today: "Sat",
  setSelectedClass: jest.fn(),
};
describe("WeekView", () => {
  it("should render all the & days", () => {
    const { container } = render(<WeekView {...props} />);
    expect(container.querySelectorAll(".calender-header-day").length).toBe(7);
  });

  it("should call setSelectedClass on click ", () => {
    const { container } = render(<WeekView {...props} />);
    fireEvent.click(container.querySelectorAll(".calender-header-day")[3]);
    expect(props.setSelectedClass).toHaveBeenCalled();
  });

  it("should apply setSelectedClass class when day is equal to today ", () => {
    const { container } = render(<WeekView {...props} />);
    expect(
      container.querySelectorAll(".calender-header-day")[6].classList
    ).toContain("today");
  });
});
