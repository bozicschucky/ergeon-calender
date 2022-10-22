import React, { useState } from "react";
import { months, days } from "../../constants";
import WeekView from "../WeekView";
import Button from "../Button";
import { getCalenderData } from "../../utils/getCalenderInformation";

function CalenderView() {
  const [nextAction, setNextAction] = useState("");
  let [actionCount, setActionCount] = useState(1);
  const [selectedDateIndex, setSelectedDateIndex] = useState(-1);

  const todayDate = new Date();
  const today = days[todayDate.getDay()];
  const setSelectedClass = (index: number) => {
    setSelectedDateIndex(index);
  };

  const { week, month, year } = getCalenderData(nextAction, actionCount);
  const weekDays = week.map((day) => {
    return {
      day: day.getDate(),
      isToday:
        day.toDateString() === todayDate.toDateString() &&
        days[day.getDay()] === today,
    };
  });

  const handleAction = (action: string) => {
    if (action === "next") {
      setActionCount(++actionCount);
    } else if (action === "prev") {
      setActionCount(--actionCount);
    }
    setNextAction(action);
    //reset the selected date when the user clicks on next or prev
    setSelectedDateIndex(-1);
  };

  return (
    <div className="calender-container">
      <div className="calender-header">
        <div className="title">Calender Navigation</div>

        <div className="calender-header year-title">
          {months[month]} {year}{" "}
        </div>

        <div className="calender-header-days">
          <Button
            onClick={handleAction}
            action="prev"
            btnClass="btn"
            text="PREV"
          />

          <WeekView
            daysOfTheWeek={days}
            weekDays={weekDays}
            selectedDateIndex={selectedDateIndex}
            today={today}
            setSelectedClass={setSelectedClass}
          />

          <Button
            onClick={handleAction}
            action="next"
            btnClass="btn"
            text="NEXT"
          />
        </div>
      </div>
    </div>
  );
}

export default CalenderView;
