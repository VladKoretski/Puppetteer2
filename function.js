function generateDayOfWeek ()  {
    const weekDay = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let currentDay = date.getDay();
    let dayToGo = (Math.floor(Math.random()*7)+currentDay)%7;
    return weekDay[dayToGo];
}