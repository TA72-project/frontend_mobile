import { DirectionsCar } from "@mui/icons-material";
import { Icon } from "@mui/material";
import React, { useState, useRef, FormEvent, useEffect } from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { ReactComponent as Bell } from "../assets/icons/notification-1.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar-1.svg";
import Schedule from "../components/Schedule";

const Home = () => {

	  // Get the current date
		const currentDate = new Date();

		// Format the current date
		const formattedDate = currentDate.toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' });


	return (
		<div className="">
			<div className="grid mt-12 mb-24 mx-6">
				<div className="grid grid-rows-1 justify-items-stretch  grid-flow-col">
					<div className="col grid justify-items-start my-auto text-p-1">Bonjour John</div>
					<div className="col grid justify-items-end">
						<button className=" py-3 px-3 button-secondary-cl text-p-2">
							<div className="">
								<Bell />
							</div>
						</button>
					</div>
				</div>
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
			<Schedule/>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-4">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas-2 bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas-2 bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas-2 bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas-2 bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
				<div className=" shadow-md  rounded-2xl image-canvas bg-gray-100 mt-2">
					<div className="mt-16 mx-2 h-8 flex justify-center  md:justify-end"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
