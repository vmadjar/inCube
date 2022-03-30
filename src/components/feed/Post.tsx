import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  media: {
    height: 300,
  },
  card: {
    marginBottom: 40,
  },
});


export const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.vseznaika.org/wp-content/uploads/2016/03/pic-00892.jpg"
          title="Vasili Madjar"
        />
        <CardContent>
          <Avatar alt="??????" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcdD37vLk-Z0pAMFWUeccnbU49vlKkIvVoQ&usqp=CAU" />
          <Typography gutterBottom variant="h6">
          Vasili Madjar
          </Typography>
          <Typography gutterBottom variant="body2">
            Vasili Madjar
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            delectus quidem et id iusto assumenda fugit! Dolore sunt ad
            pariatur! Tenetur possimus provident ducimus impedit totam ab
            dignissimos, sapiente autem.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
        <Button size="small" color="primary">
          Delete post
        </Button>
      </CardActions>
    </Card>
  );
};
