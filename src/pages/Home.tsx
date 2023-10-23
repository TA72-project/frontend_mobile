import { DirectionsCar } from "@mui/icons-material";
import { Icon } from "@mui/material";
import React, { useState, useRef, FormEvent, useEffect } from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';


const Home = () => {

	return (
			<div className=" md:mx-2 mt-14">
					<div className="grid md:grid-cols-2 mt-16">
							<div className="col-span-2 xl:col-span-2 shadow-md my-12 sm:w-11/12 lg:w-8/12 md:w-10/12 xl:w-6/12 md:w8/12 mx-auto p-4 md:p-8 rounded-2xl bg-gray-100 mt-14">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-6 mt-4">
									</div>

									<div className="mt-16 mx-4 md:mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
									</div>

									<div className="mt-16 mx-8 flex justify-center md:justify-end">
											<div className="inline-flex text-gray-50">
													<button className="px-6 py-2 md:px-8 font-bold bg-gray-400 rounded-md">See all</button>
											</div>
									</div>
							</div>



					</div>



			</div >
	);
};

export default Home;