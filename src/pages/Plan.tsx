import React from "react";
import Schedule from "../components/Schedule";
import { ReactComponent as Calendar } from "../assets/icons/calendar-1.svg";
import ScheduleDay from "../components/ScheduleDay";

const Plan = () => {


	  // Get the current date
		const currentDate = new Date();

		// Format the current date
		const formattedDate = currentDate.toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' });

	return <div className="grid mt-12">
		<div className="grid mt-12 mb-24 mx-6 ">
		<div className="grid grid-rows-1 justify-items-stretch mt-4 mb-8 grid-flow-col">
					<div className="col grid justify-items-start">
						<div className="row  text-p-3">{formattedDate}</div>
						<div className="row text-l-1">3 intereventions prévus</div>
					</div>
					<div className="col grid justify-items-end">
						<button className=" py-3 px-3 button-primary-cl text-p-2">
							<div className="">
								<Calendar />
							</div>
						</button>
					</div>
				</div>
			<ScheduleDay/>
			</div>
	</div>;
};

export default Plan;