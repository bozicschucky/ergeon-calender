export function getCalenderData(action: string, actionCount: number) {
  const week = [];
  let month = 0;
  let year = 0;
  let currentDate = new Date();
  if (action === "next") {
    // go to the next week
    currentDate.setDate(currentDate.getDate() + actionCount);
  } else if (action === "prev") {
    currentDate.setDate(currentDate.getDate() - actionCount);
  } else {
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());
  }
  for (let i = 0; i < 7; i++) {
    month = currentDate.getMonth();
    year = currentDate.getFullYear();
    week.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return { week, month, year };
}
