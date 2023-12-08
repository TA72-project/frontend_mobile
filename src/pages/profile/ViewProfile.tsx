import React from "react";

const Profile = () => {
	return <div className=" md:mx-2 mt-20">
	<div className="grid md:grid-cols-2 mt-12">
		<div className="image-canvas col-span-2 xl:col-span-2 shadow-md my-4 sm:w-11/12 lg:w-8/12 md:w-10/12 xl:w-6/12 md:w8/12 mx-auto p-4 md:p-8 rounded-2xl bg-gray-100 mt-8">
			<div className="d-inlive w-14 h-14"></div>

		</div>
		<div className="row mb-6">
				<p className="text-p-1">Je m'identifie</p>
			</div>
	</div>

	<div className="mx-12">
		<div className="grid grid-cols-1 ">

			<div className="row">
				<p className="text-l-1">Mon identifiant</p>
			</div>
			<div className="row mb-6">
				<input className="appearance-none input-primary-cm block w-full text-gray-700 borde py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="vehicle_model"></input>
			</div>
			<div className="row">
				<p className="text-l-1">Mon mot de passe</p>
			</div>
			<div className="row">
				<input className="appearance-none input-primary-cm block w-full  text-gray-700  py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="vehicle_model"></input>
			</div>
			<div className="row text-center mt-12">
				<p className="text-p-2">Tous les champs sont obligatoires</p>
			</div>
			<div className="row text-center mt-12">
				<button className="w-full py-4 font-bold bg-gray-400 button-primary-cm text-p-1">Continuer</button>
			</div>
		</div>
	</div>
</div>;
};

export default Profile;