import { IList } from '../interfaces/interfaces';
import { useStyles } from '../styles/styles';
interface Props {
	l: IList;
}

export default function Item({ l }: Props) {
	const styles = useStyles();
	return (
		<div className={styles.singleItem}>
			{l.title}
			<button className={styles.button} onClick={() => console.log(l.id)}>
				Details
			</button>
		</div>
	);
}
