import { IList } from '../interfaces/interfaces';
import { useStyles } from '../styles/styles';
import { Link } from 'react-router-dom';
interface Props {
	l: IList;
}

export default function Item({ l }: Props) {
	const styles = useStyles();
	return (
		<div className={styles.singleItem}>
			{l.title}
			<Link className={styles.button} to={`/${l.id}`}>
				Details
			</Link>
		</div>
	);
}
