import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIconLight } from "../assets/icons/home-2.svg";
import { ReactComponent as HomeIconBold } from "../assets/icons/home.svg";
import { ReactComponent as NoteLigth } from "../assets/icons/archive-book.svg";
import { ReactComponent as NoteBold } from "../assets/icons/archive-books-2.svg";
import { ReactComponent as CalendarLight } from "../assets/icons/calendar-4.svg";
import { ReactComponent as CalendarBold } from "../assets/icons/calendar-2.svg";
import { ReactComponent as ProfileLight } from "../assets/icons/user.svg";
import { ReactComponent as ProfileBold } from "../assets/icons/user-1.svg";
import { ReactComponent as MessageLight } from "../assets/icons/message-text-1.svg";
import { ReactComponent as MessageBold } from "../assets/icons/message-text-2.svg";

const Navigation = () => {

	const navigate = useNavigate();

	var path = window.location.pathname;

  const goToHome = () => {
    navigate("/");
  }

	const goToNotes = () => {
		navigate("/notes");
	}

	const goToCalendar = () => {
		navigate("/calendar");
	}

	const goToProfile = () => {
		navigate("/profile");
	}

	const goToMessages = () => {
		navigate("/dm");
	}

	const goToPlan = () => {
		navigate("/plan");
	}

	return (
		<nav className="fixed w-full bottom-0 left-0 rl-auto navigation-bar">
			<div className="grid grid-rows-1 grid-flow-col gap-2 py-5 px-4">
				<button className={`col-span-1 ${path === "/" ? "selected" : ""}`} onClick={goToHome}>
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
						{(path === "/" ? <HomeIconBold className="nav-svg"/> : <HomeIconLight className="nav-svg"/>)}
						</div>
						<div className="row text-sm-1">Home</div>
					</div>
				</button>
				<button className={`col-span-1 ${path === "/notes" ? "selected" : ""}`} onClick={goToNotes}>
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
						{(path === "/notes" ? <NoteBold className="nav-svg"/> : <NoteLigth className="nav-svg"/>)}
						</div>
						<div className="row text-sm-1">Notes</div>
					</div>
				</button>
				<button className={`col-span-1 ${path === "/dm" ? "selected" : ""}`} onClick={goToMessages}>
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							{(path === "/dm" ? <MessageBold className="nav-svg"/> : <MessageLight className="nav-svg"/>)}
						</div>
						<div className="row text-sm-1">Dm</div>
					</div>
				</button>
				<button className={`col-span-1 ${path === "/plan" ? "selected" : ""}`} onClick={goToPlan}>
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							{(path === "/plan" ? <CalendarBold className="nav-svg"/> : <CalendarLight className="nav-svg"/>)}
						</div>
						<div className="row text-sm-1">Plan</div>
					</div>
				</button>
				<button className={`col-span-1 ${path === "/profile" ? "selected" : ""}`} onClick={goToProfile}>
					<div className="grid grid-rows-2 justify-items-center">
						<div className="row">
							{(path === "/profile" ? <ProfileBold className="nav-svg"/> : <ProfileLight className="nav-svg"/>)}
						</div>
						<div className="row text-sm-1">Profile</div>
					</div>
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
