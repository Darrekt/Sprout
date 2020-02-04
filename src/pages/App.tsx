import React from 'react';
import './App.css';
import './../components/Card'
import SimpleCard from './../components/Card';

const App: React.FC = () => {
	return (
		<div className="App" >
			<SimpleCard></SimpleCard>
		</div>
	);
}

export default App;
