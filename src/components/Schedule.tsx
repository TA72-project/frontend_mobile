import * as React from "react";

const Schedule = () => {

	 // Get the current date
	 const currentDate = new Date();

  // Function to get an array of dates for the current day and three days before and after
  const getDaysArray = () => {
    const daysArray = [];
    for (let i = -3; i <= 3; i++) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() + i);
      daysArray.push(day);
    }
    return daysArray;
  };

  // Format the date to display in the UI
  const formatDateString = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {day: 'numeric'});
  };

	const capitalizeFirstLetter = (string: String) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	// Format the date to display in the UI
  const formatWeekDayString = (date: Date) => {
    const toFormat = date.toLocaleDateString('fr-FR', {weekday: 'short'}).replace('.', '');
		return capitalizeFirstLetter(toFormat);
  };

  // Get an array of dates
  const daysArray = getDaysArray();

	return (
    <div className="grid col row-span-7 grid-rows-7 grid-flow-col">
      {/* Map over the array of dates and create a button for each date */}
      {daysArray.map((day, index) => (
        <button
          key={index}
          className={`py-3 px-1 ${index === 3 ? 'button-primary-ln' : 'btn'} text-p-2`}
          onClick={() => console.log(`Button clicked for ${index}`)}
        >
					<div className="col">
						<div className="row">
          {formatDateString(day)}
					</div>
					<div className="row">
					{formatWeekDayString(day)}
					</div>
					</div>
        </button>
      ))}
    </div>
  );
};

export default Schedule;