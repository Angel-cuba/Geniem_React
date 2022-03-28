import { IList } from '../interfaces/interfaces';
import { useStyles } from '../styles/styles';
import { Link } from 'react-router-dom';
interface Props {
	LItem: IList;
}

export default function Item({ LItem }: Props) {
	const styles = useStyles();
	return (
		<div className={styles.singleItem}>
			{LItem.id}
			<img className={styles.singleItemImg} src={LItem.thumbnailUrl} alt="" />
			<Link className={styles.button} to={`/${LItem.id}`}>
				Details
			</Link>
		</div>
	);
}
