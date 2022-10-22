import React, { useState } from "react";
import { months, days } from "../constants";
import WeekView from "../components/weekView";
import { getCalenderData } from "../utils/getCalenderInformation";

function CalenderView() {
  const [nextAction, setNextAction] = useState("");
  let [actionCount, setActionCount] = useState(1);

  const [selectedDateIndex, setSelectedDateIndex] = useState(-1);

  const todayDate = new Date();
  const today = days[todayDate.getDay()];

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

  const setSelectedClass = (index: number) => {
    setSelectedDateIndex(index);
  };

  const { week, month, year } = getCalenderData(nextAction, actionCount);
  const weekDays = week.map((day) => {
    if (
      day.toDateString() === todayDate.toDateString() &&
      day.getDate() === todayDate.getDate()
    ) {
      console.log(day.getDate(), todayDate.getDate());
    }
    return {
      day: day.getDate(),
      isToday:
        day.toDateString() === todayDate.toDateString() &&
        day.getDate() === todayDate.getDate(),
    };
  });

  return (
    <div className="calender-container">
      <div className="calender-header">
        <div className="title">Calender Navigation</div>
        <div className="calender-header year-title">
          {months[month]} {year}{" "}
        </div>

        <div className="calender-header-days">
          <button
            className="btn"
            id="prev-btn"
            onClick={() => handleAction("prev")}
          >
            PREV
          </button>

          <WeekView
            daysOfTheWeek={days}
            weekDays={weekDays}
            selectedDateIndex={selectedDateIndex}
            today={today}
            setSelectedClass={setSelectedClass}
          />

          <button
            className="btn"
            id="next-btn"
            onClick={() => handleAction("next")}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalenderView;
