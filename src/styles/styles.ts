import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	content: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	singleItem: {
		position: 'relative',
		width: '200px',
		height: '200px',
		margin: '1rem',
		padding: '1rem',
		backgroundColor: 'red',
		border: '1px solid whitesmoke',
		borderRadius: '5px',
		boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
	},
	button: {
		position: 'absolute',
		bottom: '1rem',
		right: '1rem',
		borderRadius: '5px',
		textDecoration: 'none',
		backgroundColor: 'silver',
		color: 'black',
		padding: '0.62rem',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#e6e6e6',
			boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.12)',
		},
	},
});
