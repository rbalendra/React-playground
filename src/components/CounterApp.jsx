import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 150px;
	height: 50px;
	background-color: cornflowerblue;
	border: none;
	margin: 10px;
	color: white;
`;

const CounterApp = () => {
	const [count, setCount] = useState(0);
	const [data, setDate] = useState('Success');

	let message;
	let remainingClick = 10 - count;

	function handleIncrease() {
		setCount((prevCount) => prevCount + 1);
	}

	if (count < 10) {
		message = (
			<div>
				<h3>You clicked {count} times</h3>
				<p>Still {remainingClick} more times to reach a 10% discount </p>
			</div>
		);
	} else if (count === 10) {
		message = (
			<div>
				<h3>You clicked {count} times</h3>
				<p>You unlocked 10% discount </p>
			</div>
		);
	} else if (count < 20) {
		message = (
			<div>
				<h3>You clicked {count} times</h3>
				<p>
					You are on the way to get more rewards! keep clicking for 20% discount
				</p>
			</div>
		);
	} else {
		message = (
			<div>
				<h3>You clicked {count} times</h3>
				<p>You are a click master</p>
			</div>
		);
	}

	let displayComp = () => {
		switch (data) {
			case 'Loading':
				return <LoadingComp />;
				break;
			case 'Success':
				return <SuccessComp />;
				break;
			case 'Error':
				return <ErrorComp />;
				break;
		}
	};

	return (
		<div>
			<h1>Click to Unlock Rewards 🎉🎉🎉 </h1>
			<Button onClick={handleIncrease}>Click Me!</Button>
			{message}
			{count >= 30 && <Button onClick={resetCount}>Reset Click</Button>}

			{displayComp()}

			{/* {count >= 10 ? (
				<p>You unlocked 10% Discount</p>
			) : (
				<p>Click 10 times to unlock Rewards</p>
			)}

			{count >= 20 && <p>You're a Click Master</p>} */}
		</div>
	);
};

export default CounterApp;

function LoadingComp() {
	return <h6>Loading....</h6>;
}

function SuccessComp() {
	return <h6>Success ❤️</h6>;
}

function ErrorComp() {
	return <h6>Error 😒</h6>;
}
