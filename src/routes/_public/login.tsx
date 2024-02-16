import React from "react"; // Ensure this import is at the top of your file

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useAuth } from "../../lib/auth";

export const Route = createFileRoute("/_public/login")({
	validateSearch: z.object({
		redirect: z.string().optional(),
	}),
	component: LoginComponent,
});

function LoginComponent() {
	return (
		<div className='p-2 h-screen bg-gray-100 w-full flex flex-col'>
			<div>Please log in.</div>
			<LoginButton />
		</div>
	);
}

const LoginButton = () => {
	const auth = useAuth();

	const loginWithGoogle = async () => {
		await auth.login("google");
		console.log("called logged in");
	};

	return (
		<button
			onClick={loginWithGoogle}
			className='text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded'
		>
			Login with Google
		</button>
	);
};