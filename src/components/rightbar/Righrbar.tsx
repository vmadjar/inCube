import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    position: "sticky",
    top: 0,
    paddingTop: 90,
    height: "100vh",
    backgroundColor: "#f5f2f2"
  },
});

export const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Здесь будет правая сторона</Container>;
};
