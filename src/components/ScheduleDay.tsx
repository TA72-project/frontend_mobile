import { SettingsFlowState } from "@ory/client";
import React, { useState, useEffect } from "react";


const ScheduleDay = () => {
	// Get the current date
	const currentDate = new Date();

	const [date, setDate] = useState(new Date());

	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		// Update the current time every minute
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 60000);

		return () => clearInterval(intervalId);
	}, []);

	// Function to get an array of dates for the current day and three days before and after
	const getDaysArray = () => {
		const daysArray = [];
		for (let i = -3; i <= 3; i++) {
			const day = new Date(date);
			day.setDate(date.getDate() + i);
			daysArray.push(day);
		}
		return daysArray;
	};

	// Format the date to display in the UI
	const formatDateString = (date: Date) => {
		return date.toLocaleDateString("fr-FR", { day: "numeric" });
	};

	const capitalizeFirstLetter = (string: String) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	// Format the date to display in the UI
	const formatWeekDayString = (date: Date) => {
		const toFormat = date.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");
		return capitalizeFirstLetter(toFormat);
	};

	// Get an array of dates
	const daysArray = getDaysArray();

	const generateTimeSlots = (time: Date) => {
		const timeSlots = [];
		const toFormat = time.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", hour12: false });
		const twoDigitHour = toFormat.split(":")[0];
		const startTime = 6; // Start time in hours
		const endTime = 22; // End time in hours
		const slotDuration = 30; // Time slot duration in minutes

		for (let hour = startTime; hour < endTime; hour++) {
			for (let minute = 0; minute < 60; minute += slotDuration) {
				const formattedTime = `${hour < 10 ? "0" : ""}${hour % 24}h${minute === 0 ? "00" : minute}`;
				const isCurrentTime = currentTime.getHours() === hour && currentTime.getMinutes() === minute;

				timeSlots.push(
					<div key={formattedTime} className={`px-2 py-1 mb-12  ${isCurrentTime ? "current-time" : ""}`}>
						{formattedTime}
					</div>,
				);
			}
		}

		return timeSlots;
	};

	const changeDate = (date: Date) => {
		generateTimeSlots(date);
	}

	const choseDate = (index: number) => {
		setDate(daysArray[index]);
	}

	// update the page with effect
	useEffect(() => {
		changeDate(date);
		console.log(date);
	}, [date]);

	return (
		<div>
			<div className="grid col row-span-7 grid-rows-7 grid-flow-col">
				{/* Map over the array of dates and create a button for each date */}
				{daysArray.map((day, index) => (
					<button key={index} className={`row row-span-1 py-4 px-1 ${index === 3 ? "button-primary-ln" : "btn"} text-p-2`} onClick={() => choseDate(index)}>
						<div className="col">
							<div className="row">{formatDateString(day)}</div>
							<div className="row">{formatWeekDayString(day)}</div>
						</div>
					</button>
				))}
			</div>
			<div className="grid grid-rows-1 grid-flow-col-dense justify-items-stretch mt-4 gap-2">
				<div className="grid col col-span-1">
					<div className="grid col">{generateTimeSlots(currentTime)}</div>
				</div>
				<div className="grid col">
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
				</div>
				<div className="grid col">
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
					<div className="gird row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">FOLLY (6 D Boulevard Anatole)</div>
						</div>
						<div className="grid row text-sm-1">11h00 - 11h30</div>
					</div>
					<div className="row row-span-1  mt-2">
						<div className="mt-6 mx-2 h-8 flex justify-center"></div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas-2  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">PERDRIAU (2 Bis rue Thireey Mieg)</div>
						</div>
						<div className="grid row text-sm-1">13h00 - 13h30</div>
					</div>
					<div className="row row-span-1 shadow-md p-3 rounded-2xl image-canvas  mt-2">
						<div className="grid grid-rows-1 grid-flow-col-dense">
							<div className="text-p-2 grid col col-span-1 flex">SIDOL (23 Rue de la Moselle)</div>
						</div>
						<div className="grid row text-sm-1">13h30 - 14h00</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default ScheduleDay;
