import React from 'react';
import styled from 'styled-components';

let headingStyle = {
	backgroundColor: 'tomato',
	color: 'white',
	boxShadow: '2px 2px 5px black',
};

let Button = styled.button`
	background-color: cornflowerblue;
	color: white;
	width: 100px;
	height: 50px;
`;

let NewButton = styled(Button)`
	background-color: hotpink;
	box-shadow: 1px 1px 1px black;
`;

const Content = () => {
	let user = 'Rajeev';

	function printSomething(e) {
		// console.log(e.target.innerText); //this will show the inner content of the button
		user = 'Murugesan';
		console.log(user);
	}

	function printSomething1(event) {
		// console.log(event.target.innerText);
		user = 'Rangaswamy';
		console.log(user);
	}

	return (
		<main>
			<h1 style={headingStyle}>Main Content - {user}</h1>
			<Button onClick={printSomething}>Click Me</Button>
			<NewButton
				onClick={(e) => {
					printSomething1(e);
				}}>
				Duplicate
			</NewButton>
		</main>
	);
};

export default Content;
