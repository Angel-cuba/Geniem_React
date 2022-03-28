import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	// List.tsx
	content: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		color: 'white',
	},
	// Item.tsx
	singleItem: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		margin: '1rem',
		padding: '1rem',
		backgroundColor: 'rgba(0, 0, 0, 0.81)',
		border: '1px solid whitesmoke',
		borderRadius: '5px',
		boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.52)',
	},
	button: {
		borderRadius: '5px',
		textDecoration: 'none',
		backgroundColor: 'silver',
		color: 'black',
		padding: '0.62rem',
		marginTop: '1rem',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#e6e6e6',
			boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.12)',
		},
	},
	singleItemImg: {
		borderRadius: '5px',
		marginTop: '1rem',
	},
	//Details.tsx
	details: {
		width: '100vw',
		height: '100vh',
		backgroundColor: 'rgba(0, 0, 0, 0.281)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0 0 15px 0 rgba(255, 250, 250, 0.2)',
	},
	detailsLink: {
		position: 'absolute',
		top: '5rem',
		right: '5rem',
		backgroundColor: 'silver',
		borderRadius: '5px',
		textDecoration: 'none',
		padding: '1rem',
		color: 'rgba(0, 0, 0, 0.481)',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#e6e6e6',
			color: '#000',
			boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.12)',
		},
	},
	contentDetails: {
		padding: '1rem',
		backgroundColor: '#d3d3d3',
		borderRadius: '8px',
	},
	paragraphDetails: {
		fontSize: '1.1rem',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	paragraphDetailsText: {
		textAlign: 'center',
		fontSize: '1.5rem',
		color: 'whitesmooke',
		fontWeight: 'bold',
		padding: '1rem',
		border: '1px solid rgba(0, 0, 0, 0.12)',
		backgroundColor: 'rgba(0, 0, 0, 0.052)',
		borderRadius: '5px',
	},
	spanDetails: {
		fontSize: '2rem',
		color: 'crimson',
	},
	imgDetails: {
		borderRadius: '8px',
	},
});
