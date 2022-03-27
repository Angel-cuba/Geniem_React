import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	content: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	singleItem: {
		width: '200px',
		height: '200px',
		margin: '1rem',
		backgroundColor: 'red',
		border: '1px solid whitesmoke',
		borderRadius: '5px',
		boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
	},
});
