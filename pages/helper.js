import Head from "next/head";
import { DataContext } from "../store/GlobalState";
import { useState, useContext, useEffect } from "react";

export default function Helper() {
	const { state, dispatch } = useContext(DataContext);

	return (
		<div>
	
				<Head>
					<title>Frequency Sorting</title>
					{/* <meta name="description" content="Generated by create next app" /> */}
					<link rel="icon" href="/favicon.ico" />
				</Head>
				
		</div>
	);
}
