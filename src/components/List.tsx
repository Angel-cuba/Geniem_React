import { IList } from '../interfaces/interfaces';
import Item from './Item';
import { useStyles } from '../styles/styles';

interface Props {
	list: IList[];
}

export default function List({ list }: Props) {
	const styles = useStyles();
	return (
		<div className={styles.content}>
			{list.map((l, index: number) => (
				<Item key={index} l={l} />
			))}
		</div>
	);
}
