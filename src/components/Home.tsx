import { useEffect, useState } from 'react';
import { Reader } from '../api/request';
import { IList } from '../interfaces/interfaces';
import List from './List';
import _ from 'lodash';

const Home = () => {
	const [list, setList] = useState<IList[]>([]);
	const [pagingList, setPagingList] = useState<IList[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const pageSize = 100;

	const ReadList = () => {
		try {
			Reader()
				.then((response) => response.json())
				.then((data) => {
					setList(data);
					setPagingList(_(data).slice(0).take(pageSize).value());
				});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		ReadList();
	}, []);

	const pageCount = list ? Math.ceil(list.length / pageSize) : 0;
	if (pageCount === 1) return null;
	const pages = _.range(1, pageCount + 1);

	const pagination = (page: number) => {
		setCurrentPage(page);
		const startIndex = (page - 1) * pageSize;
		const paginatedList = _(list).slice(startIndex).take(pageSize).value();
		setPagingList(paginatedList);
	};
	return (
		<div className="App">
			<h1>React app!</h1>
			<nav style={{ width: '98vw', margin: 'auto' }}>
				<ul>
					{pages.map((page, index) => (
						<li
							key={index}
							className={page === currentPage ? 'active' : 'disabled'}
							onClick={() => pagination(page)}
						>
							{page}
						</li>
					))}
				</ul>
			</nav>
			{!pagingList ? 'Loading...' : <List list={pagingList} />}
		</div>
	);
};

export default Home;
