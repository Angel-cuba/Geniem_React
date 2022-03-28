import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReaderById } from '../api/request';

const Details = () => {
	const { id } = useParams();

	useEffect(() => {
		ReaderById(id)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.title);
			});
	}, [id]);

	console.log(id);
	return <div>Details</div>;
};

export default Details;
