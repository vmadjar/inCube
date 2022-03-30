import { Container} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Add } from '../modal/Add';
import { Post } from './Post';

 const useStyles = makeStyles({
    container: {
        marginTop: 75,
    paddingTop: 25,
    },
})

export const Feed = () => {
    const classes = useStyles()
  return(
       <Container className={classes.container}>
        <Add/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
       </Container>
  )
}