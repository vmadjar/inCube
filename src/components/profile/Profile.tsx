import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: 75,
    paddingTop: 25,
  },
});

export const Profile = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>Здесь будет МОЯ СТРАНИЦА</Container>
  );
};