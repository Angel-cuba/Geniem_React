import React, { useEffect, useState } from 'react';
import { Reader } from '../api/request';
import { IList } from '../interfaces/interfaces';
import List from './List';

const Home = () => {
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
};

export default Home;
