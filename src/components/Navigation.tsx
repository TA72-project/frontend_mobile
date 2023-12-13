import * as React from "react";
import { ReactComponent as HomeIconLight } from "../assets/icons/home-2.svg";
import { ReactComponent as HomeIconBold } from "../assets/icons/home.svg";
import { ReactComponent as NoteLigth } from "../assets/icons/archive-book.svg";
import { ReactComponent as NoteBold } from "../assets/icons/archive-book-2.svg";
import { ReactComponent as CalendarLight } from "../assets/icons/calendar-4.svg";
import { ReactComponent as CalendarBold } from "../assets/icons/calendar-2.svg";
import { ReactComponent as ProfileLight } from "../assets/icons/user.svg";
import { ReactComponent as ProfileBold } from "../assets/icons/user-1.svg";
import { ReactComponent as MessageLight } from "../assets/icons/message-text-1.svg";
import { ReactComponent as MessageBold } from "../assets/icons/message-text-2.svg";

const Navigation = () => {
	return (
		<nav className="fixed w-full bottom-0 left-0 rl-auto navigation-bar">
			<div className="grid grid-rows-1 grid-flow-col gap-2 py-5 px-4">
				<div className="col-span-1">
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							<HomeIconBold />
						</div>
						<div className="row text-sm-1">Home</div>
					</div>
				</div>
				<div className="col-span-1 ">
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							<NoteLigth />
						</div>
						<div className="row text-sm-1">Notes</div>
					</div>
				</div>
				<div className="col-span-1 ">
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							<MessageLight />
						</div>
						<div className="row text-sm-1">Dm</div>
					</div>
				</div>
				<div className="col-span-1 ">
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							<CalendarLight />
						</div>
						<div className="row text-sm-1">Plan</div>
					</div>
				</div>
				<div className="col-span-1 ">
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							<ProfileLight />
						</div>
						<div className="row text-sm-1">Profile</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
