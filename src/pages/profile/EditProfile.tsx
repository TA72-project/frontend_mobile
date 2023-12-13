import React from "react";
import { ReactComponent as Folder } from "../../assets/icons/folder-2.svg";
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import userProfile from "../../assets/images/profile.png";

const EditProfile = () => {
	return (
		<div className="top-margin">
			<div className="mx-8">
				<div className="grid grid-cols-1">
					<div className="row mb-2">
						<p className="text-p-3">Photo de profile</p>
					</div>
					<div className="row mb-2">
						<div className="grid grid-rows-1 justify-items-stretch grid-flow-col gap-2 py-5">
							<div className="col-span-1">
								<div className="grid justify-items-center image-canvas-3">
									<img src={userProfile} alt="" />
								</div>
							</div>
							<div className="grid justify-items-end">
								<div className="grid grid-rows-2 justify-items-center">
									<div className="row text-p-3">
										<button className="w-full py-4 px-4 button-primary-cl text-p-2">
											<div className="grid grid-rows-1 justify-items-stretch grid-flow-col gap-4">
												<div className="col grid justify-items-start">
													<Camera />
												</div>
												<div className="col grid justify-items-end">Prendre une photo</div>
											</div>
										</button>
									</div>
									<div className="row mt-1">
										<button className="w-full py-4 px-4 button-secondary-cl text-p-2">
											<div className="grid grid-rows-1 justify-items-stretch grid-flow-col gap-4">
												<div className="col grid justify-items-start">
													<Folder />
												</div>
												<div className="col grid justify-items-end">Choisir une photo </div>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<p className="text-p-2">Nom et prénom</p>
					</div>
					<div className="row my-2">
					<input className="mb-2 appearance-none input-secondary-cm block w-full  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="John Doe" id="grid-last-name" type="text" name="vehicle_model"></input>
					</div>
					<div className="row">
						<p className="text-p-2">Email</p>
					</div>
					<div className="row my-2">
					<input className="mb-2 appearance-none input-secondary-cm block w-full  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="john.doe@x.com" id="grid-last-name" type="text" name="vehicle_model"></input>
					</div>
					<div className="row">
						<p className="text-p-2">Ancient mot de passe</p>
					</div>
					<div className="row my-2">
					<input className="mb-2 appearance-none input-secondary-cm block w-full  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"  type="text" name="vehicle_model"></input>
					</div>
					<div className="row">
						<p className="text-p-2">Nouveaux mot de passe</p>
					</div>
					<div className="row my-2">
					<input className="mb-2 appearance-none input-secondary-cm block w-full  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="vehicle_model"></input>
					</div>
					<div className="row my-2">
						<button className="w-full py-4 px-8 button-primary-cl text-p-3">
								Enregistrer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
