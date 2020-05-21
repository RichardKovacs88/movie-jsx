import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '25ch',
	  },
	},
  }));

function Search ({ handleInput, search }) {
	const classes = useStyles();
	return (
		<section className="searchbox-wrap">
			
			<TextField className={classes.root} noValidate autoComplete="off" id="outlined-basic" label="Search for a movie..."  className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}/>
		</section>
	)
}

export default Search
