import { IList } from '../interfaces/interfaces';
import Item from './Item';
import { useStyles } from '../styles/styles';

interface Props {
	list: IList[];
}

export default function List({ list }: Props) {
	const styles = useStyles();
	return (
		<>
			{!list ? (
				'Loading...'
			) : (
				<div className={styles.content}>
					{list.map((l, index: number) => (
						<Item key={index} LItem={l} />
					))}
				</div>
			)}
		</>
	);
}
