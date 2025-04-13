// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
	let person = 'Rajeev';

	return (
		<div className='app'>
			<Header user={person} /> {/*key value is being sent*/}
			<Content />
			<Footer user='Murphy' />
		</div>
	);
}

export default App;
