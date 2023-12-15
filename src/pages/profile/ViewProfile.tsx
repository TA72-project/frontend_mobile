import React from "react";
import { ReactComponent as Edit } from "../../assets/icons/edit-2.svg";
import userProfile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {

	const navigate = useNavigate();

	const goToEditProfile = () => {
		navigate("/profile/edit");
	}

	return (
		<div className=" md:mx-2 mt-20">
			<div className="grid md:grid-cols-2 mt-12">
				<div className="image-canvas-3 col-span-2 xl:col-span-2 shadow-md my-4 sm:w-11/12 lg:w-8/12 md:w-10/12 xl:w-6/12 md:w8/12 mx-auto p-4 md:p-8 rounded-2xl bg-gray-100 mt-8">
					<div className="d-inlive w-14 h-14">
					<img src={userProfile} alt="" />
					</div>
				</div>
			</div>
			<div className="col-span-1 mb-4">
				<div className="grid grid-rows-2 justify-items-center">
					<div className="row text-p-3">John Doe</div>
					<div className="row">john.doe@x.com</div>
				</div>
			</div>
			<div className="mx-8">
				<div className="grid grid-cols-1">
					<div className="row mb-2">
						<p className="text-p-3">Statistiques</p>
					</div>
					<div className="row mb-2">
						<div className="grid grid-rows-1 justify-items-center grid-flow-col gap-2 py-5">
							<div className="col-span-1">
								<div className="grid grid-rows-2 justify-items-center stat-card-1">
									<div className="row text-p-3">3</div>
									<div className="row">Interven</div>
								</div>
							</div>
							<div className="col-span-1">
								<div className="grid grid-rows-2 justify-items-center stat-card-1">
									<div className="row text-p-3">3</div>
									<div className="row">Patients</div>
								</div>
							</div>
							<div className="col-span-1">
								<div className="grid grid-rows-2 justify-items-center stat-card-1">
									<div className="row text-p-3">3</div>
									<div className="row">Villes</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mb-2">
						<p className="text-p-3">Réglages</p>
					</div>
					<div className="row my-2">
						<button className="w-full py-4 px-8 button-primary-cl text-p-3x" onClick={goToEditProfile}>
							<div className="grid grid-rows-1 justify-items-stretch grid-flow-col">
								<div className="col grid justify-items-start">Modifier le profil</div>
								<div className="col grid justify-items-end"><Edit/></div>
							</div>
						</button>
					</div>
					<div className="row my-2">
						<div className="w-full py-4 px-8 button-primary-cl text-p-3x">
							<div className="grid grid-rows-1 justify-items-stretch grid-flow-col">
								<div className="col grid justify-items-start">Thème</div>
								<div className="col grid justify-items-end"><Edit/></div>
							</div>
						</div>
					</div>
					<div className="row my-2">
						<div className="w-full py-4 px-8 button-primary-cl text-p-3x">
							<div className="grid grid-rows-1 justify-items-stretch grid-flow-col">
								<div className="col grid justify-items-start">Langue</div>
								<div className="col grid justify-items-end"><Edit/></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
