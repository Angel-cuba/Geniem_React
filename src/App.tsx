import { useEffect, useState } from 'react';
import { Reader } from './api/request';
import './App.css';
import List from './components/List';
import { IList } from './interfaces/interfaces';

function App() {
	const [list, setList] = useState<IList[]>([]);
	console.log(list);
	const ReadList = () => {
		try {
			Reader()
				.then((response) => response.json())
				.then((data) => {
					setList(data);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		ReadList();
	}, []);
	return (
		<div className="App">
			<h1>React app!</h1>
			<List list={list} />
		</div>
	);
}

export default App;
