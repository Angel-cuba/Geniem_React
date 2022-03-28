import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReaderById } from '../api/request';
import { IList } from '../interfaces/interfaces';
import { useStyles } from '../styles/styles';

const Details = () => {
	const { id } = useParams();
	const styles = useStyles();
	const [itemId, setItemId] = useState<IList>();
	console.log(itemId);

	useEffect(() => {
		ReaderById(id)
			.then((response) => response.json())
			.then((data) => {
				setItemId(data);
			});
	}, [id]);

	return (
		<div className={styles.details}>
			<h1>Details</h1>
			{!itemId ? (
				'Loading...'
			) : (
				<div className={styles.contentDetails}>
					<p className={styles.paragraphDetails}>
						This picture is available on the album{' '}
						<span className={styles.spanDetails}>{itemId.albumId}</span>
					</p>
					<img src={itemId.url} alt={`Pic with id ${itemId.id}`} />
				</div>
			)}
			<Link className={styles.detailsLink} to="/">
				Back to all pictures
			</Link>
		</div>
	);
};

export default Details;
