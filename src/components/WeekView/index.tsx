import React from "react";

export interface Props {
  daysOfTheWeek: string[];
  weekDays: { day: number; isToday: boolean }[];
  selectedDateIndex: number;
  today: string;
  setSelectedClass: (i: number) => void;
}
const WeekView: React.FunctionComponent<Props> = ({
  daysOfTheWeek,
  weekDays,
  selectedDateIndex,
  today,
  setSelectedClass,
}: Props) => {
  return (
    <div className="days-container">
      {daysOfTheWeek.map((day, index) => {
        return (
          <div
            className={`calender-header-day ${
              selectedDateIndex === index && "selected-day"
            } ${weekDays[index].isToday && today === day && "today"}`}
            key={index}
            onClick={() => setSelectedClass(index)}
          >
            <div>{day}</div>
            <div>{weekDays[index].day}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekView;
