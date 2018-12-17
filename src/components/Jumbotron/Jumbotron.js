//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Yu-Gi-Oh! Memory Game</h1>
		<h2>Can you become the next King of Games? Click on any Duel Monster card to earn 1 point, but don't click on the same picture more than once. Click all 12 pics, and you win!</h2>
	</header>
);

export default Jumbotron;